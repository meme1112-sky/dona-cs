"""
Partners section background:
- Transparent ONLY in the elliptical cutout ABOVE the top curve
- Gradient using design colors only:
    Color 1 (top):    #0c1915
    Color 2 (bottom): #030706
"""
from PIL import Image
import math

W, H = 1920, 1600

# Exact design gradient stops
COLOR_1 = (0x0C, 0x19, 0x15)  # #0c1915 — upper area (arrow 1)
COLOR_2 = (0x03, 0x07, 0x06)  # #030706 — lower area (arrow 2)

# Deep even ridge across full width
INDENT = 110


def lerp(a, b, t):
    return a + (b - a) * t


def mix(c1, c2, t):
    t = max(0.0, min(1.0, t))
    return tuple(int(lerp(c1[i], c2[i], t) + 0.5) for i in range(3))


def top_edge_y(x: float, cx: float, cy: float, r: float) -> float:
    """Even circular arc: (0,0) → (W/2, INDENT) → (W, 0)."""
    dx = x - cx
    inside = r * r - dx * dx
    if inside <= 0:
        return 0.0
    return cy + math.sqrt(inside)


def sample_color(x: float, y: float, y0: float) -> tuple[int, int, int]:
    """Vertical gradient Color1 → Color2, with a soft top-center bias toward Color1."""
    local_h = max(H - y0, 1.0)
    vy = (y - y0) / local_h  # 0 at curve, 1 at bottom

    # Ease so upper zone stays nearer Color1 a bit longer (matches design)
    t = vy * vy * (3.0 - 2.0 * vy)  # smoothstep
    base = mix(COLOR_1, COLOR_2, t)

    # Soft radial keep Color1 a little stronger near top-center (arrow 1 zone)
    cx = W * 0.5
    cy = y0 + local_h * 0.1
    nx = (x - cx) / (W * 0.5)
    ny = (y - cy) / (local_h * 0.45)
    dist = math.sqrt(nx * nx + ny * ny)
    glow = max(0.0, 1.0 - dist) ** 2
    out = mix(base, COLOR_1, glow * 0.35 * max(0.0, 1.0 - vy))

    # Edges drift slightly toward Color2
    edge = abs(x / (W - 1) - 0.5) * 2.0
    out = mix(out, COLOR_2, (edge ** 1.5) * 0.2 * min(1.0, vy + 0.25))
    return out


def main():
    half = W / 2.0
    k = (half * half - INDENT * INDENT) / (2.0 * INDENT)
    r = INDENT + k
    cx, cy = half, -k

    img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    px = img.load()
    edges = [top_edge_y(float(x), cx, cy, r) for x in range(W)]

    for x in range(W):
        y0 = edges[x]
        y_start = int(math.ceil(y0))
        for y in range(y_start, H):
            dist_into = y - y0
            if dist_into < 1.25:
                alpha = int(255 * (dist_into / 1.25))
            else:
                alpha = 255
            if alpha <= 0:
                continue
            rgb = sample_color(float(x), float(y), y0)
            px[x, y] = (*rgb, alpha)

    out = r"D:\task\2026_07_15_bc\my_wrok_1\src\assets\partners-bg.png"
    img.save(out, "PNG", optimize=True)

    top = img.getpixel((W // 2, INDENT + 8))
    bottom = img.getpixel((W // 2, H - 20))
    cutout = img.getpixel((W // 2, 5))[3]
    print(f"wrote {out}")
    print(f"cutout_alpha={cutout}")
    print(f"top_sample={top[:3]} (expect near {COLOR_1})")
    print(f"bottom_sample={bottom[:3]} (expect near {COLOR_2})")


if __name__ == "__main__":
    main()

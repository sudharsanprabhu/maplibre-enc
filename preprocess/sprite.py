import xml.etree.ElementTree as ET
import os
import json


def read_data(path: str):
    with open(path) as file:
        data = ET.parse(file)
        return data


def generate(data):
    root = data.getroot()
    symbols = root.find("symbols")
    sprites = {}
    for symbol in symbols:
        try:
            name = symbol.find("name").text
            bitmap = symbol.find("bitmap")
            if bitmap is None:
                continue

            width = int(bitmap.attrib.get("width"))
            height = int(bitmap.attrib.get("height"))
            graphics_location = bitmap.find("graphics-location")
            x = int(graphics_location.attrib.get("x"))
            y = int(graphics_location.attrib.get("y"))

            sprites[name] = { "width": width, "height": height, "x": x, "y": y,  "pixelRatio": 1 }
        except AttributeError as e:
            print(e)

    return sprites


def write_sprite(filename: str, data: dict):
    directory = "output/sprites"
    os.makedirs(directory, exist_ok=True)
    with open(f"{directory}/{filename}.json", "w") as file:
        json.dump(data, file, indent=2)


def main():
    file = "data/chartsymbols_S57.xml"
    data = read_data(file)
    sprite = generate(data)
    write_sprite("rastersymbols-day", sprite)


if __name__ == "__main__":
    main()
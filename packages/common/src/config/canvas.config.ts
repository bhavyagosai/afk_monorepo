export const CanvasConfig: ICanvasConfig = {
  canvas: {
    width: 512,
    height: 384,
  },
  colors: [
    "FAFAFA",
    "080808",
    "BA2112",
    "FF403D",
    "FF7714",
    "FFD115",
    "F5FF05",
    "199F27",
    "00EF3F",
    "152665",
    "1542FF",
    "5CFFFE",
    "A13DFF",
    "FF7AD7",
    "C1D9E6",
  ],
  votableColors: [
    "EA1608",
    "FF5C5D",
    "F86949",
    "DD7F70",
    "FDE578",
    "DEBF86",
    "74401B",
    "266515",
    "78EA1F",
    "C6FF05",
    "D3FEBE",
    "46B093",
    "29E083",
    "3F00EF",
    "1991F4",
    "5672E1",
    "786EDE",
    "3C3C84",
    "C84CF5",
    "CDA3F5",
    "E4B2E6",
    "EA1F78",
    "CD3C5B",
    "898D90",
    "D4D7D9",
  ],
  colorsBitwidth: 5,
};

export interface ICanvasConfig {
  canvas: {
    width: number;
    height: number;
  };
  colors: string[];
  votableColors: string[];
  colorsBitwidth: number;
}

enum Species {
  CAT = 'cat',
  DOG = 'dog',
  COW = 'cow',
}

enum ColorFur {
  BLACK = 'black',
  WHITE = 'white',
  GRAY = 'gray',
  RED = 'red',
  BLUE = 'blue',
  BROWN = 'brown',
  DARK_BROWN = 'dark_brown',
  BLONDE = 'blonde',
}

enum ColorEyes {
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
  BROWN = 'brown',
  RED = 'red',
}

enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

enum SizeFur {
  NONE = 'none',
  SHORT = 'short',
  LARGE = 'large',
}

interface Animal {
  id: string;
  name: string;
  bday: Date;
  desc: string;
  breed: string;
  color: ColorFur[];
  eyes: ColorEyes;
  species: Species;
  size: Size;
  sizeFur: SizeFur;
}

export {
  Species,
  ColorFur,
  ColorEyes,
  Size,
  SizeFur,
  Animal,
};

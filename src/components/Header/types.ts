export interface ISubMenu {
  icon: string;
  linkText: string;
  link: string;
}

export interface IMenu {
  id: number;
  menuItem: string;
  subMenuItems?: ISubMenu[];
  link?: string;
  image: string;
}

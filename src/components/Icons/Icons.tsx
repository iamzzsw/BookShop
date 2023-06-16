import React from "react";
import cn from "classnames";

import { ReactComponent as Chevron } from "images/icons/chevron.svg";

import { ReactComponent as LogoIcon } from "./svg/Bookstore.svg";
import { ReactComponent as LikeIcon } from "./svg/Like.svg";
import { ReactComponent as BasketIcon } from "./svg/Basket.svg";
import { ReactComponent as ProfileIcon } from "./svg/Profile.svg";
import { ReactComponent as FavotiteIcon } from "./svg/Vector.svg";
import { ReactComponent as FacebookIcon } from "./svg/facebook.svg";
import { ReactComponent as TwitterIcon } from "./svg/twitter.svg";
import { ReactComponent as RedLikeIcon } from "./svg/redLike.svg";
import { ReactComponent as SearchIcon } from "./svg/search.svg";
import styles from "./Icon.module.css";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  name:
    | "logo"
    | "search"
    | "like"
    | "basket"
    | "profile"
    | "facebook"
    | "twitter"
    | "redLike"
    | "favLike";
}

const icons: Record<IconsProps["name"], React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  logo: LogoIcon,
  like: LikeIcon,
  search: SearchIcon,
  basket: BasketIcon,
  profile: ProfileIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  redLike: RedLikeIcon,
  favLike: FavotiteIcon,
};

const Icons: React.FC<IconsProps> = ({ className, name, ...props }) => {
  const Icon = icons[name];
  return <Icon className={cn(styles.icon, className)} {...props} />;
};

export default Icons;

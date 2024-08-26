import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { SiLaravel } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";

const iconSize = 32;

export const devIcons = {
    react:<FaReact size={iconSize} />,
    mui:<SiMui size={iconSize} />,
    redux:<TbBrandRedux size={iconSize}/>,
    next:<TbBrandNextjs size={iconSize}/>,
    laravel:<SiLaravel size={iconSize}/>,
    mariaDB:<SiMariadb size={iconSize}/>,
    tailwind:<SiTailwindcss size={iconSize} />,
    vite:<SiVite size={iconSize} />,
    sequelize:<SiSequelize size={iconSize} />,
    express:<SiExpress size={iconSize}/>,
    postgreSQL:<SiPostgresql size={iconSize} />,
    node:<TbBrandNodejs size={iconSize}/>,
    mongoDB:<SiMongodb size={iconSize} />,
    mongoose:<SiMongoose size={iconSize} />
}
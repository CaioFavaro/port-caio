import { Outlet } from "react-router-dom";
import Menu from "../Menu";
import Banner from "../Banner";
import Rodape from "../Rodape";

export default function PaginaPadrao({ mostrarBanner = true }) {
    return (
        <>
            <Menu />
            {mostrarBanner && <Banner />}
            <main>
                <Outlet />
            </main>
            <Rodape />
        </>
    );
}
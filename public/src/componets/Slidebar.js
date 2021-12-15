
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/test.css'
import { useHistory } from "react-router-dom";
import { Container, Button, SidebarContainer, Logo, SlickBar, Item, Text, Profile, Details, Name, Logout } from "../stylecomponets/Stylecomponets";

export const Sidebar = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setprofileClick] = React.useState(false);
    const handleProfileClick = () => setprofileClick(!profileClick);
    const history = useHistory();
    const handleRoute = (val) => {

        switch (val) {
            case "order":
                history.push("/order");
                break;
            case "history":
                history.push("/history");
                break;
            case "aboutus":
                history.push("/aboutus");
                break;

            default:
                history.push("/");
        }
    }
    return (
        <Container>
            <Button clicked={click} >
            </Button>
            <SidebarContainer>
                <Logo>
                </Logo>
                <SlickBar clicked={click}>
                    <Item
                        onClick={() => {
                            handleRoute("/")
                            setClick(false)
                        }}
                        exact
                        activeClassName="active"
                        to="/"
                    >
                        <svg viewBox="0 0 576 512" width="100" title="home">
                            <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                        </svg>
                        <Text clicked={click}>Home</Text>
                    </Item>
                    <Item
                        to="/order"
                        onClick={() => {
                            handleRoute("order")
                            setClick(false)
                        }

                        }
                        activeClassName="active"

                    >
                        <svg viewBox="0 0 512 512" width="100" title="book-reader">
                            <path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z" />
                        </svg>
                        <Text clicked={click}>Order</Text>
                    </Item>
                    <Item
                        onClick={() => {
                            handleRoute("history")
                            setClick(false)
                        }}
                        activeClassName="active"
                    >
                        <svg viewBox="0 0 640 512" width="100" title="user-clock">
                            <path d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z" />
                        </svg>
                        <Text clicked={click}>History</Text>
                    </Item>
                    <Item
                        onClick={() => {
                            handleRoute("aboutus")
                            setClick(false)
                        }}
                        activeClassName="active"
                        to="/aboutus"
                    >
                        <svg viewBox="0 0 448 512" width="100" title="paperclip">
                            <path d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z" />
                        </svg>
                        <Text clicked={click}>Aboutus</Text>
                    </Item>
                </SlickBar>


                <Logout onClick={(e) => {
                    e.preventDefault();
                    sessionStorage.clear()
                    setTimeout(() => {handleRoute("/order")}, 2000)
                }}>
                    <svg viewBox="0 0 512 512" width="100" title="power-off">
                        <path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z" />
                    </svg>
                </Logout>

            </SidebarContainer>
        </Container>
    );
};



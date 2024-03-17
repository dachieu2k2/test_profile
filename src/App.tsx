import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Container } from '@mui/material';

import { routes } from './routes';
import { TopBar } from './Components';

const App = () => {
    // const [isSidebar, setIsSidebar] = useState<boolean>(true);s
    return (
        <BrowserRouter>
            <HelmetProvider>
                <div className="app">
                    <div className="content">
                        <TopBar />
                        <Container maxWidth="lg">
                            <Routes>
                                {routes.map((value, index) => (
                                    <Route key={index} path={value.path} element={value.component} />
                                ))}
                            </Routes>
                        </Container>
                    </div>
                </div>
            </HelmetProvider>
        </BrowserRouter>
    );
};

export default App;

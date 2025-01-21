import {Navigate, Route, Routes} from "react-router";
import {AuthRoutes} from "../auth/routes/AuthRoutes.jsx";
import {JournalRoutes} from "../journal/routes/JournalRoutes.jsx";
import {CheckingAuth} from "../ui/components/CheckingAuth.jsx";
import {useCheckAuth} from "../hooks/";

export const AppRouter = () => {

    const {status} = useCheckAuth()

    if (status === "checking") {
        return <CheckingAuth/>
    }

    return (
        <Routes>
            {
                status === "authenticated"
                    /* Journal App */
                    ? <Route path="/*" element={<JournalRoutes/>}/>
                    /* Login y registro */
                    : <Route path="/auth/*" element={<AuthRoutes/>}/>
            }
            <Route path="/*" element={<Navigate to='/auth/login'/>}/>
        </Routes>
    );
};

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Laout from "./client/Components/Laout";
import BookingDetails from "./client/Pages/BookingDetails";
import BookingList from "./client/Pages/BookingList";
import Home from "./client/Pages/Home";
import Profile from "./client/Pages/Profile"
import ProfileAddMember from "./client/Pages/ProfileAddMember";
import ProfileBooking from "./client/Pages/ProfileBooking"
import ProfilePrementLink from "./client/Pages/ProfilePamentLinks"
import ProfilePasswordChange from "./client/Pages/ProfilePasswordChange";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* client */}
        <Route path="/" element={<Laout><Home /></Laout>} />
        <Route path="/booking-list" element={<Laout> <BookingList /> </Laout>} />
        <Route path="/booking-details" element={<Laout> <BookingDetails /> </Laout>} />
        <Route path="/profile" element={<Laout><Profile /></Laout>} />
        <Route path="/profile/booking" element={<Laout> <ProfileBooking /> </Laout>} />
        <Route path="/profile/links" element={<Laout><ProfilePrementLink /></Laout>} />
        <Route path="/profile/fnf" element={<Laout> <ProfileAddMember /> </Laout>} />
        <Route path="/profile/change-password" element={<Laout><ProfilePasswordChange /></Laout>} />
        {/* client */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getasientos,
  getMovies,
  createScreening,
} from "../../../redux/actions";
import NavBarDash from "../NavbarDash/NavBarDash";
import SideBarDash from "../SideBarDash/SideBarDash";
import axios from "axios";
import "./newscreenings.scss";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const RoomInputs = () => {
  const loggedUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedUser.isAdministrator || loggedUser.isAdministrator === false) {
      navigate("/");
    }
  });
  const dispatch = useDispatch();
  const asientos = useSelector((state) => state.seats);
  const movies = useSelector((state) => state.movies);
  const roomLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const [roomLetter, setRoomLetter] = useState("A");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [definition, setDefinition] = useState("IMAX");
  const [language, setLanguage] = useState("Sub");
  const [seats, setSeats] = useState([]);
  const [id, setId] = useState(movies[0]);
  const [title, setTitle] = useState([movies[0]]);
  const [reservation, setReservation] = useState({});

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getasientos());
    setSeats(asientos);
  }, [id]);

  const handleSave = () => {
    setReservation({
      title,
      roomLetter,
      date,
      startTime,
      endTime,
      definition,
      language,
      seats,
      id,
    });
  };

  console.log(reservation);

  const getNext30Days = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 30; i++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay.toLocaleDateString("en-US", { weekday: "long" }));
    }

    return days;
  };

  const next30Days = getNext30Days();

<<<<<<< HEAD
  // function enviarDatos() {
  //   console.log(reservation);
  //   axios
  //     .post("http://localhost:3001/screenings", reservation)

  //     .then((response) => {
  //       swal({
  //         title: `The screening of ${reservation.title} has been created`,
  //         icon: "success",
  //         button: true,
  //       });
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

=======
>>>>>>> f751722fd41b20b0141c03234088adb487715261
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createScreening(reservation)).then(() =>
      swal({
<<<<<<< HEAD
        title: `The screening ${reservation.title} has been created`,
=======
        title: `The movie ${reservation.title} has been created`,
>>>>>>> f751722fd41b20b0141c03234088adb487715261
        icon: "success",
        button: true,
      })
    );
<<<<<<< HEAD
    navigate("/dashboard/movies/new");
=======
>>>>>>> f751722fd41b20b0141c03234088adb487715261
    console.log(reservation);
  };

  return (
    <div className="NewScreen">
      <SideBarDash />
      <div className="ContainerNewScreen">
        <NavBarDash />
        <div className="InfoNewScreen">
          <div className="top">
            <h1>Add New Screenings</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="DataScreen">
                <h1>Title: {reservation.title}</h1>
                <h1>ID: {reservation.id}</h1>
                <h1>Room: {reservation.roomLetter}</h1>
                <h1>Date: {reservation.date}</h1>
                <h1>Start: {reservation.startTime}</h1>
                <h1>End: {reservation.endTime}</h1>
                <h1>Definition: {reservation.definition}</h1>
                <h1>Language: {reservation.language}</h1>
                <h1>
                  Seats: {reservation.seats ? reservation.seats.length : 0}
                </h1>
                <div className="buttonConfirmL">
                  <button onClick={handleSubmit}>CONFIRM</button>
                </div>
              </div>
            </div>
            <div className="right">
              <label>Movie</label>
              <select
                className="seleMoviScre"
                value={id}
                onChange={(e) => {
                  const selectedMovie = movies.find(
                    (movie) => movie.id === e.target.value
                  );
                  setId(selectedMovie.id);
                  setTitle(selectedMovie.title);
                }}
              >
                <option>Movies</option>
                {movies.map((movie) => (
                  <option key={movie.id} value={movie.id}>
                    {movie.title}
                  </option>
                ))}
              </select>

              <label>Room</label>
              <select
                className="seleRoomScre"
                value={roomLetter}
                onChange={(e) => setRoomLetter(e.target.value)}
              >
                {roomLetters.map((letter) => (
                  <option key={letter} value={letter}>
                    {letter}
                  </option>
                ))}
              </select>

              <label>
                Date:
                <br />
                <select
                  className="seleDateScre"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                >
                  <option>Select a Date</option>
                  {[...Array(30)].map((_, i) => {
                    const nextDay = new Date();
                    nextDay.setDate(nextDay.getDate() + i);
                    const dateString = nextDay.toISOString().split("T")[0];
                    return (
                      <option key={dateString} value={dateString}>
                        {dateString}
                      </option>
                    );
                  })}
                </select>
              </label>

              <label>
                Start Time:
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </label>

              <label>
                End Time:
                <input
                  type="time"
                  value={endTime}
                  name="endTime"
                  min={startTime} // Establece el valor mínimo para el input de end time
                  onChange={(e) => {
                    const { name, value } = e.target;
                    const newStartTime =
                      name === "startTime" ? value : startTime;
                    const newEndTime = name === "endTime" ? value : endTime;

                    if (newStartTime >= newEndTime) {
                      alert("End time must be after start time");
                      return;
                    }

                    setStartTime(newStartTime);
                    setEndTime(newEndTime);
                  }}
                  disabled={!startTime}
                />
              </label>

              <label>
                Definition:
                <p></p>
                <select
                  value={definition}
                  onChange={(e) => setDefinition(e.target.value)}
                >
                  <option value="IMAX">IMAX</option>
                  <option value="3D">3D</option>
                  <option value="2D">2D</option>
                </select>
              </label>

              <label>
                Language:
                <p></p>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="Sub">Sub</option>
                  <option value="Dub">Dub</option>
                  <option value="Origin">Origin</option>
                </select>
              </label>
              <button onClick={handleSave}>SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInputs;

import { addDays, format, parse, subDays, toDate } from 'date-fns';
import { useState } from 'preact/hooks';

const initialDates = [
  subDays(new Date(), 28),
  subDays(new Date(), 24),
  subDays(new Date(), 21),
  subDays(new Date(), 17),
  subDays(new Date(), 10),
  subDays(new Date(), 1),
];

export const App = () => {
  const [dates, setDates] = useState(initialDates);

  return (
    <>
      <form>
        <ul>
          {dates.map((date, index) => (
            <li>
              <input
                onChange={(changedDate) => {
                  setDates(
                    dates.map((date, dateIndex) => {
                      if (dateIndex === index) {
                        return parse(
                          changedDate.target.value,
                          'yyyy-MM-dd',
                          new Date()
                        );
                      }
                      return date;
                    })
                  );
                }}
                type="date"
                value={format(date, 'yyyy-MM-dd')}
              ></input>
            </li>
          ))}
        </ul>
      </form>
      <button
        onClick={() => {
          setDates(dates.map((date) => addDays(date, 1)));
        }}
      >
        Shift days +1
      </button>
      <button
        onClick={() => {
          setDates(dates.map((date) => subDays(date, 1)));
        }}
      >
        Shift days -1
      </button>

      <div>
        <h1>Van Sever Web, Factuurnummer 1</h1>
        <h2>Afzender</h2>
        <p>
          Lennert Van Sever
          <br />
          Jules Delcordestraat 14, 1560 Hoeilaart
          <br />
          +32 489 47 1063
          <br />
          lennert_vansever@hotmail.be
          <br />
          BE47 9501 4424 3880
        </p>
        <h2>Ontvanger</h2>
        <p>
          SYNTRA Midden-Vlaanderen vzw
          <br />
          Hogekouter 1
          <br />
          9100 Sint-Niklaas
          <br />
          BE0420803024
        </p>
        <table cellSpacing="0">
          <thead>
            <tr>
              <td>Prestatie</td>
              <td>Vak/onderwerp</td>
              <td>Lesdatum</td>
              <td>Cursus en cursuscode</td>
              <td>Aantal ren</td>
              <td>€ per uur</td>
              <td>Dag €</td>
            </tr>
          </thead>
          <tbody>
            {dates.map((date) => (
              <tr>
                <td>Lesgeven</td>
                <td>HTML/CSS</td>
                <td>{format(date, 'dd-MM-yyyy')}</td>
                <td>Frontend Developer 1 - 210167</td>
                <td>4u</td>
                <td>€60</td>
                <td>€240</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Totaal: €{dates.length * 240}</td>
            </tr>
          </tbody>
        </table>
        <p>Handtekening afzender</p>
        <img src="../assets/signature.png" />
      </div>
    </>
  );
};

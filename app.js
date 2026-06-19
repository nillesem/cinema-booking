let paymentCompleted = false; 
const REGULAR_PRICE = 350;
const STUDENT_PROMO_PRICE = 199;

function getTicketPrice(hasPromo) {
    return hasPromo ? STUDENT_PROMO_PRICE : REGULAR_PRICE;
}

function isWednesdayPromo() {
    return new Date().getDay() === 3;
}

const MOVIES = [
    {
        id: 1,
        title: "Swapped",
        rating: "PG",
        runtime: "1h 38 min",
        releaseDate: "May 28, 2026",
        genre: "Animation, Adventure",
        director: "Nathan Greno",
        cast: ["Michael Jordan", "Juno Temple", "Tracy Morgan"],
        synopsis: "A tiny woodland creature and a majestic bird suddenly swap bodies, forcing them to team up to survive the wildest adventure of their lives.",
        poster: "fly.jpg",
        status: "now_showing",
        showtimes:["10:00 AM", "11:55 AM", "1:50 PM", "3:45 PM", "5:40 PM", "7:35 PM"]
    },
    {
        id: 2,
        title: "Hoppers",
        rating: "PG",
        runtime: "1h 44 min",
        releaseDate: "May 29, 2026",
        genre: "Comedy, Sci-Fic",
        director: "Daniel Chong",
        cast: ["Piper Curda", "Bobby Moynihan", "Jon Hamm"],
        synopsis: "A 19-year-old animal lover uses technology that places her consciousness into a robotic beaver to uncover mysteries within the animal world beyond her imagination.",
        poster: "hoppers.jpg",
        status: "now_showing",
        showtimes: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"]
    },
     {
        id: 3,
        title: "Colony",
        rating: "R-13",
        runtime: "2h 02 min",
        releaseDate: "May 27, 2026",
        genre: "Action, Horror, Thriller",
        director: "Yeon Sang-ho",
        cast: ["Jun Ji-hyun", "Koo Kyo-hwan", "Ji Chang-wook"],
        synopsis: "Professor Se-jeong is thrust into a bloody nightmare when a rapidly mutating virus is released during a biotech conference causing authorities to seal the facility. Trapped inside with no escape, Se-jeong along with a small group of survivors must fight to stay alive while the infected undergo horrific transformations.",
        poster: "colony.jpg",
        status: "now_showing",
        showtimes: ["10:00 AM", "12:20 PM", "2:40 PM", "5:00 PM", "7:20 PM"]
     },
      {
     id: 4,
     title: "Obsession",
     rating: "R-16",
     runtime: "1h 48 min",
     releaseDate: "May 27, 2026",
     genre: "Horror, Thriller",
     director: "Curry Barker",
     cast: ["Michael Johnston", "Inde Navarrette", "Copper Tomlinson"],
     synopsis: "After breaking the mysterious One Wish Willow to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.",
     poster: "obsession.jpg",
     status: "now_showing",
     showtimes: ["10:00 AM", "12:05 PM", "2:10 PM", "4:15 PM", "6:20 PM"]
 },
  {
     id: 5,
     title: "The Amazing Digital Circus",
     rating: "R-13",
     runtime: "1h 34 min",
     releaseDate: "June 03, 2026",
     genre: "Animation, Adventure",
     director: "Kane Parsons",
     cast: ["Lizzie Freeman", "Michael Kovach", "Amanda Hufford"],
     synopsis: "Discover the fates of Pomni and the gang as they unravel the true secret & history of the Digital Circus as this show finally arrives at its last act.",
     poster: "Circus.jpg",
     status: "now_showing",
     showtimes: ["10:00 AM", "11:55 AM", "1:50 PM", "3:45 PM", "5:40 PM", "7:35 PM"]
 },
 {
     id: 6,
     title: "Back Rooms",
     rating: "R-13",
     runtime: "1h 50 min",
     releaseDate: "June 03, 2026",
     genre: "Horror, Mystery, Sci-fi",
     director: "Kane Parsons",
     cast: ["Chiwetel Ejiofor", "Renate Reinsve", "Mark Duplass"],
     synopsis: "A strange doorway appears in the basement of a furniture showroom.",
     poster: "back.jpg",
     status: "now_showing",
     showtimes: ["10:00 AM", "12:10 PM", "2:20 PM", "4:30 PM", "6:40 PM"]
 },
    {
        id: 7,
        title: "Scary Movie",
        rating: "R-16",
        runtime: "1h 30 min",
        releaseDate: "June 10, 2026",
        genre: "Horror, Comedy",
        director: "Michael Tiddes",
        cast: ["Anna Faris", "Mariom Wayans", "Shawn Wayans"],
        synopsis: "Twenty-six years after outrunning a suspiciously familiar masked killer, the Core Four are back in the killer's crosshairs and no horror movie IP is safe.",
        poster: "imagae.jpg",
        status: "now_showing",
        showtimes: ["10:00 AM", "11:45 AM", "1:30 PM", "3:15 PM", "5:00 PM", "6:45 PM"]
    },
    {
    id: 8,
    title: "Toy Story 5",
    rating: "PG",
    runtime: "1h 42 min",
    releaseDate: "June 19, 2026",
    genre: "Animated Adventure, Comedy, family",
    director: "Andrew Stanton",
    cast: ["Tom Hanks", "Tim Allen","Joan Cusack"],
    synopsis: "Woody, Buzz, Jessie and the rest of the gang's jobs are challenged when they're introduced to electronics, a new threat to playtime.",
    poster: "Toy Story 5.jpg",
    status: "now_showing",
    showtimes: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"]
},
    {
        id: 9,
        title: "Minions & Monster",
        rating: "PG",
        runtime: "1h 29 min",
        releaseDate: "June 30, 2026",
        genre: "Animation, Adventure, Comedy, Sci-Fic",
        director: "Pierre Coffin",
        cast: ["Pierre Coffin", "Allison Janney", "Christoph Waltz"],
        synopsis: "This is the rambunctious, ridiculous and totally true story of how the Minions conquered Hollywood, became movie stars, lost everything, unleashed monsters onto the world and then banded together to try and save the planet from the mayhem they had just created.",
        poster: "minions.jpg",
        status: "now_showing",
        showtimes: ["10:00 AM", "11:45 AM", "1:30 PM", "3:15 PM", "5:00 PM", "6:45 PM"]
    
    },
    {
    id: 10,
    title: "Black Box",
    rating: "R",
    runtime: "2h 0 min",
    releaseDate: "July 7, 2026",
    genre: "Triller",
    director: "Steven Quale",
    cast: ["Anton Trendafilov", "Asa Ali", "Tom Brittney"],
    synopsis: "Vero Airlines Flight 298 from New Orleans to Seattle becomes the center of a chilling supernatural mystery.",
    poster: "black.jpeg",
    status: "now_showing",
        showtimes: ["10:00 AM", "12:15 PM", "2:30 PM", "4:45 PM", "7:00 PM"]
    
   }, 
   {
        id: 11,
        title: "Moana",
        rating: "G",
        runtime: "1h 45 min",
        releaseDate: "July 08, 2026",
        genre: "Adventure, Comedy, Family, Fantasy",
        director: "Thomas Kail",
        cast: ["Catherine Laga‘aia", "Dwayne Johnson", "Rena Owen"],
        synopsis: "Moana answers the Ocean's call and, for the first time, voyages beyond the reef of her island of Motunui with the infamous demigod Maui on an unforgettable journey to restore prosperity to her people.",
        poster: "moana.jpg",
        status: "now_showing",
        showtimes: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"]
    },
{
    id: 12,
    title: "The Odyssey",
    rating: "R",
    runtime: "2h 52 min",
    releaseDate: "July 15, 2026",
    genre: "Action",
    director: "Christopher Nolan",
    cast: ["Tom Holland", "Robert Pattinson", "Matt Damon", "Anne Hathaway"],
    synopsis: "After the Trojan War, Odysseus faces a dangerous voyage back to Ithaca, meeting creatures like the Cyclops Polyphemus, Sirens, and Calypso along the way.",
    poster: "oda.jpeg",
    status: "now_showing",
    showtimes: ["10:00 AM", "1:07 PM", "4:14 PM", "7:21 PM"]
   },
   {
        id: 13,
        title: "Spider-Man: Brand New Day",
        rating: "PG-13",
        runtime: "2h 30 min",
        releaseDate: "July 29, 2026",
        genre: "Adventure, Action, Sci-Fic",
        director: "Destin Daniel Cretton",
        cast: ["Tom Holland", "Sadie Sink", "Zendaya"],
        synopsis: "Four years have passed since the events of No Way Home, and Peter is now an adult living entirely alone, having voluntarily erased himself from the lives and memories of those he loves. Crime-fighting in a New York that no longer knows his name, he's devoted himself entirely to protecting his city — a full-time Spider-Man — but as the demands on him intensify, the pressure sparks a surprising physical evolution that threatens his existence, even as a strange new pattern of crimes gives rise to one of the most powerful threats he has ever faced.",
        poster: "spider.jpg",
        status: "now_showing",
    showtimes: ["10:00 AM", "12:45 PM", "3:30 PM", "6:15 PM"]
   },
    {
        id: 14,
        title: "Forgotten Island",
        rating: "PG-13",
        runtime: "1h 38 min",
        releaseDate: "September 23, 2026",
        genre: "Adventure, Animation, Comedy, Family, Fantasy",
        director: "Januel Mercado, Joel Crawford",
        cast: ["H.E.R", "Liza Soberano", "Dave Franco"],
        synopsis: "Jo and Raissa find themselves stranded in the mystical world of the forgotten island of Nakali. They discover that their only way home might come at the expense of a lifetime of shared memories.",
        poster: "forgotten.jpg",
        status: "now_showing",
    showtimes: ["10:00 AM", "11:55 AM", "1:50 PM", "3:45 PM", "5:40 PM", "7:35 PM"]
    },
    {
        id: 15,
        title: "Avatar Aang: The Last Airbender",
        rating: "PG-13",
        runtime: "1h 39 min",
        releaseDate: "October 07, 2026",
        genre: "Fantasy, Action",
        director: "Lauren Montgomery",
        cast: ["Eric Nam","Jessica Matten", "Dave Bautista","Steven Yeun", "Dionne Quan","Román Zaragoza"],
        synopsis: "Avatar Aang, the world's last Airbender, learns of an ancient power that could save his culture from extinction. With the help of his friends, he embarks on a global quest to find it before it falls into the wrong hands and threatens to upend the peace they sacrificed everything to achieve.",
        poster: "Aang.jpg",
        status: "now_showing",
    showtimes: ["10:00 AM", "11:55 AM", "1:50 PM", "3:45 PM", "5:40 PM", "7:35 PM"]
    },
    {
        id: 16,
        title: "The Hunger Games: Sunrise on the Reaping",
        rating: "PG-13",
        runtime: "2h 30 min",
        releaseDate: "November 18, 2026",
        genre: "Action, Adventure, Sci-Fic",
        director: "Francis Lawrence",
        cast: ["Mckenna Grace", "Jennifer Lawrence", "Joseph Zada","Elle Fanning"],
        synopsis: "Return to the world of Panem 24 years before the events of The Hunger Games, starting on the morning of the reaping of the 50th Hunger Games, also known as the Second Quarter Quell.",
        poster: "games.jpg",
        status: "now_showing",
    showtimes: ["10:00 AM", "12:45 PM", "3:30 PM", "6:15 PM"]
    },
];

let currentTab = 'now_showing';
let selectedMovie = null;
let selectedShowtime = null;
let selectedSeats = [];
let myTickets = JSON.parse(localStorage.getItem('myTickets')) || [];
let bookedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || []; // 

const app = document.getElementById('app-container');
let currentUser = localStorage.getItem('currentUser');

let afterLoginAction = null;

function requireLogin() {
    if (!currentUser) {
        showAlert(
            "Login Required",
            "You must sign up or log in before proceeding with payment."
        );
        navigateTo("account");
        return false;
    }
    return true;
}

// Router
function navigateTo(page, params = {}) {
    window.scrollTo(0, 0);
    updateNav(page);
    
    if (page === 'home') {
        renderHome();
    } else if (page === 'movies') {
        renderMovies();
    } else if (page === 'movie-details') {
        renderMovieDetails(params.movieId);
    } else if (page === 'seat-selection') {
        renderSeatSelection(params.movieId, params.showtime);
    } else if (page === 'confirmation') {
        renderConfirmation(params.ticket);
    } else if (page === 'tickets') {
        renderMyTickets();
    } else if (page === 'account') {
        showAccount();
    }
    else if (page === 'about') {
    renderAbout();
}
}

function updateNav(activePage) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const navId = `nav-${activePage === 'movie-details' || activePage === 'seat-selection' || activePage === 'confirmation' ? 'movies' : activePage}`;
    const el = document.getElementById(navId);
    if (el) el.classList.add('active');
}

// --- PAGES ---

function renderHome() {
    app.innerHTML = `
        <div class="hero-banner">
            <img src="cine.jpg" class="hero-image" alt="Cinema Banner">
            </div>
        </div>
        <div class="tab-container">
            <div class="tabs">
                <button class="tab-btn ${currentTab === 'now_showing' ? 'active' : ''}" onclick="switchTab('now_showing')">NOW SHOWING</button>
                <button class="tab-btn ${currentTab === 'coming_soon' ? 'active' : ''}" onclick="switchTab('coming_soon')">COMING SOON</button>
            </div>
        </div>
        <div class="movie-grid" id="movie-grid">
            ${renderMovieGrid()}
        </div>
    `;
}

function switchTab(tab) {
    currentTab = tab;
    renderHome();
}
function goToMovieSection(tab) {
    currentTab = tab;
    renderHome();
    
    setTimeout(() => {
        const tabs = document.querySelector('.tab-container');
        
        if (tabs) {
            tabs.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100);
}

function renderMovieGrid() {
    const today = new Date();
    
    const filtered = MOVIES.filter(movie => {
        const releaseDate = new Date(movie.releaseDate);
        
        if (currentTab === 'now_showing') {
            return releaseDate <= today;
        } else {
            return releaseDate > today;
        }
    });
    
    return filtered.map(movie => `
        <div class="movie-card" onclick="navigateTo('movie-details', {movieId: ${movie.id}})">
            <img src="${movie.poster}" class="movie-poster" alt="${movie.title}">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">${movie.rating} • ${movie.runtime}</div>
                <button class="movie-btn">
                    ${currentTab === 'now_showing' ? 'Get Tickets' : 'Notify Me'}
                </button>
            </div>
        </div>
    `).join('');
}

function renderMovies() {
    currentTab = 'now_showing';
    renderHome();
}

function renderMovieDetails(movieId) {
    const movie = MOVIES.find(m => m.id === movieId);
    if (!movie) return;
    selectedMovie = movie;
    const isNowShowing = new Date(movie.releaseDate) <= new Date();

    app.innerHTML = `
        <div class="details-container">
            <div class="details-left">
               <div class="back-btn" onclick="renderHome()">
    <i class="fas fa-arrow-left"></i> Back
</div>
                <img src="${movie.poster}" class="details-poster">
            </div>
            <div class="details-right">
                <h1 class="details-title">${movie.title}<span class="rating-badge">${movie.rating}</span></h1>
                <div class="info-row">
                    <span><i class="far fa-clock"></i> ${movie.runtime}</span>
                    <span><i class="far fa-calendar-alt"></i> ${movie.releaseDate}</span>
                    <span><i class="fas fa-film"></i> ${movie.genre}</span>
                    <span><i class="fas fa-user-tie"></i> ${movie.director}</span>
                </div>
              <div class="cast-section">
    <h3>Main Cast:</h3>
    <ul class="cast-list">
        ${movie.cast.map(actor => `<li>${actor}</li>`).join('')}
    </ul>
</div>
                <p class="synopsis">${movie.synopsis}</p>
                
                ${isNowShowing ? `
                    <div class="showtimes-container">
                        <h3>Select Showtime</h3>
                        ${movie.showtimes.map(time => `
                            <button class="time-btn" onclick="selectShowtime('${time}')">${time}</button>
                        `).join('')}
                    </div>
                    <button id="book-now-btn" class="cta-btn" disabled onclick="goToSeatSelection()">Book Tickets</button>
                ` : `
<button
  class="cta-btn"
  onclick="showAlert('Notification', 'We will notify you when tickets are available!')">
  Notify Me
</button>
                `}
            </div>
        </div>
    `;
}

function selectShowtime(time) {
    selectedShowtime = time;
    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.innerText === time) btn.classList.add('selected');
    });
    document.getElementById('book-now-btn').disabled = false;
}

function renderSeatSelection(movieId, showtime) {
    const movie = MOVIES.find(m => m.id === movieId);
    selectedMovie = movie;
    selectedShowtime = showtime;
    selectedSeats = [];

app.innerHTML = `
    <div class="breadcrumb">Movies > ${movie.title} > ${showtime}</div>

${isWednesdayPromo() ? `
    <div class="promo-banner">
        🎓 STUDENT PROMO ACTIVE TODAY! ALL SEATS ₱199
    </div>

    <div class="student-verification">
        <label>Student ID Number</label>
        <input
            type="text"
            id="student-id"
            placeholder="Enter Student ID"
            oninput="updateSeatUI()"
        >
    </div>
` : ''}
    <div class="screen-label">SCREEN</div>
        
        <div class="seat-map" id="seat-map">
            ${renderSeatMap(movieId)}
        </div>

        <div class="legend">
            <div class="legend-item"><div class="legend-color" style="background: var(--success)"></div><span>Available</span></div>
            <div class="legend-item"><div class="legend-color" style="background: var(--info)"></div><span>Selected</span></div>
            <div class="legend-item"><div class="legend-color" style="background: var(--danger)"></div><span>Booked</span></div>
            <div class="legend-item"><div class="legend-color" style="background: var(--unavailable)"></div><span>Unavailable</span></div>
        </div>

        <div class="summary-bar">
            <div id="summary-text">Selected: 0 seats | Total: ₱0</div>
            <button class="confirm-btn" id="confirm-booking-btn" onclick="confirmBooking()" disabled>Confirm Booking</button>
        </div>
    `;
}

function renderSeatMap(movieId) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const cols = 10;
    let html = '';

    rows.forEach(row => {
        html += `<div class="seat-row">`;
        for (let c = 1; c <= cols; c++) {
            const seatId = `${row}${c}`;
            const isBooked = (bookedSeats[movieId] || []).includes(seatId);
            const isUnavailable = (Math.random() < 0.1); // Simulate some unavailable seats
            
            let status = 'available';
            if (isBooked) status = 'booked';
            else if (isUnavailable) status = 'unavailable';

            html += `<div class="seat ${status}" data-seat="${seatId}" onclick="toggleSeat('${seatId}', '${status}')">${c}</div>`;
        }
        html += `</div>`;
    });
    return html;
}

function toggleSeat(seatId, status) {
    if (status !== 'available') return;

    const index = selectedSeats.indexOf(seatId);
    if (index > -1) {
        selectedSeats.splice(index, 1);
    } else {
        selectedSeats.push(seatId);
    }

    updateSeatUI();
}

function updateSeatUI() {
    const seatMap = document.getElementById('seat-map');
    const seats = seatMap.querySelectorAll('.seat');

    seats.forEach(seat => {
        const id = seat.dataset.seat;
        seat.classList.remove('selected');
        if (selectedSeats.includes(id)) {
            seat.classList.add('selected');
        }
    });

const studentId = document.getElementById('student-id')?.value.trim();
const hasPromo = isWednesdayPromo() && studentId;

const price = getTicketPrice(hasPromo);
const total = selectedSeats.length * price;

    document.getElementById('summary-text').innerText =
        `Selected: ${selectedSeats.length} seats | Total: ₱${total.toLocaleString()}`;

    document.getElementById('confirm-booking-btn').disabled =
        selectedSeats.length === 0;
}

function goToSeatSelection() {
    
    if (!selectedShowtime) {
        showAlert("Warning", "Please select a showtime first!");
        return;
    }
    
    navigateTo('seat-selection', {
        movieId: selectedMovie.id,
        showtime: selectedShowtime
    });
}

function confirmBooking() {
    
    const studentId = document.getElementById('student-id')?.value.trim();

    // promo applies ONLY if Wednesday + student ID exists
    const hasPromo = isWednesdayPromo() && !!studentId;

    const ticketId = `IN2026${Math.floor(100000 + Math.random() * 900000)}`;

    const price = getTicketPrice(hasPromo);

    const newTicket = {
    id: ticketId,
    movieId: selectedMovie.id,
    movieTitle: selectedMovie.title,
    time: selectedShowtime,
    date: selectedMovie.releaseDate,
    seats: [...selectedSeats].sort(),
    studentId: hasPromo ? studentId : "N/A",
    total: selectedSeats.length * price
};
    myTickets.push(newTicket);
    localStorage.setItem('myTickets', JSON.stringify(myTickets));

    if (!bookedSeats[selectedMovie.id]) bookedSeats[selectedMovie.id] = [];
    bookedSeats[selectedMovie.id].push(...selectedSeats);
    localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));

    navigateTo('confirmation', { ticket: newTicket });
}

function renderConfirmation(ticket) {
    app.innerHTML = `
        <div class="ticket-card">
            <div class="ticket-header">
                <i class="fas fa-check-circle"></i>
                <h2>Booking Confirmed!</h2>
            </div>
            <div class="ticket-body">
                <h2>${ticket.movieTitle}</h2>
                <div class="ticket-info">
                    <p><strong>Time:</strong> ${ticket.time}</p>
                    <p><strong>Date:</strong> ${ticket.date}</p>
                    <p><strong>Seats:</strong> ${ticket.seats.join(', ')}</p>
<p><strong>Ticket ID:</strong> #${ticket.id}</p>

${ticket.studentId !== "N/A" ? `
<p><strong>Student ID:</strong> ${ticket.studentId}</p>
` : ''}

<p><strong>Total Paid:</strong> ₱${ticket.total.toLocaleString()}</p>

<div class="qr-wrapper">
    <div id="qrcode"></div>
</div>
                <p class="disclaimer">Demo QR - School Project Only. No real payment</p>
            </div>
            
          <div class="payment-sim">
    <p style="text-align:center; margin-bottom: 10px; font-weight: bold;">
        Select Payment Method
    </p>

    <button class="pay-btn" onclick="simulatePayment('Cash at Counter')">
        Cash at Counter
    </button>

    <button class="pay-btn" onclick="simulatePayment('E-Wallet')">
        E-Wallet
    </button>

    <button class="pay-btn" onclick="simulatePayment('Card')">
        Card
    </button>
</div>
</div>
<button
    id="myTicketsBtn"
    class="cta-btn"
    style="width: 100%; margin-top: 20px;"
    onclick="navigateTo('tickets')"
    disabled>
    Complete
</button>
        </div>
    `;
    setTimeout(() => {
    const qr = document.getElementById("qrcode");

    if (qr) {
        qr.innerHTML = ""; // clear previous QR

        if (typeof QRCode !== "undefined") {
            new QRCode(qr, {
                text: `${ticket.id}|${ticket.movieTitle}|${ticket.time}|${ticket.seats.join(',')}`,
                width: 120,
                height: 120
            });
        } else {
            console.error("QRCode library failed to load.");
            qr.innerHTML = "<p>QR Code unavailable</p>";
        }
    }
}, 300);
}
function simulatePayment(method) {
    
    if (!currentUser) {
        
        sessionStorage.setItem("selectedPaymentMethod", method);
        sessionStorage.setItem("redirectAfterLogin", "confirmation");
        
        showAlert(
    "Login Required",
    "Please login or sign up first before selecting a payment method."
);

sessionStorage.setItem("goToLogin", "true");

return;closeAlert()
    }
    
    processPayment(method);
}
    
    function processPayment(method) {
    const lastTicket = myTickets[myTickets.length - 1];
    
    if (!lastTicket) return;
    
    lastTicket.paymentMethod = method;
    localStorage.setItem('myTickets', JSON.stringify(myTickets));
    
    document.querySelectorAll('.pay-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    const clickedBtn = [...document.querySelectorAll('.pay-btn')]
        .find(btn => btn.textContent.trim() === method);
    
    if (clickedBtn) {
        clickedBtn.classList.add('selected');
    }
    
    const completeBtn = document.getElementById('myTicketsBtn');
    
    if (completeBtn) {
        completeBtn.disabled = false;
        completeBtn.style.opacity = "1";
        completeBtn.style.cursor = "pointer";
    }
    
    showAlert(
        "Payment Selected",
        `Payment Method: ${method}`
    );
}
function renderMyTickets() {
    app.innerHTML = `
        <h1 class="my-tickets-title">My Tickets</h1>
        <div class="ticket-list">
            ${myTickets.length === 0 ? `
                <div style="text-align: center; padding: 50px 0;">
                    <p>No bookings yet</p>
                    <button class="cta-btn" onclick="navigateTo('movies')">Browse Movies</button>
                </div>
            ` : myTickets.map(ticket => `
                <div class="ticket-item">
    <div>
        <h3>${ticket.movieTitle}</h3>
        <p>${ticket.date} | ${ticket.time} | Seats: ${ticket.seats.join(', ')}</p>
        <p style="font-size: 0.8rem; color: var(--primary);">ID: #${ticket.id}</p>
        <p style="font-size: 0.8rem; color: var(--primary);">
            Payment: ${ticket.paymentMethod || "Not Selected"}
        </p>
    </div>

    ${!ticket.paymentMethod || ticket.paymentMethod === "Cash at Counter" ? `
        <button class="cancel-btn"
            onclick="cancelTicket('${ticket.id}', ${ticket.movieId}, '${ticket.time}')">
            Cancel
        </button>
    ` : `
        <button class="cancel-btn" disabled>
            Paid
        </button>
    `}
</div>
            `).join('')}
        </div>
    `;
}
function showAccount() {
    if (currentUser) {
        renderProfile();
    } else {
        renderLogin();
    }
}

function renderLogin() {
    app.innerHTML = `
        <div class="auth-wrapper">

            <div class="auth-card">
                <h1>Login</h1>

                <p>
                    Access your Infinity Cinema account and manage your bookings.
                </p>

                <label>Username</label>
                <input type="text" id="username" placeholder="Enter username">

                <label>Password</label>
                <input type="password" id="password" placeholder="Enter password">

                <button class="auth-btn" onclick="login()">
                    Login
                </button>

                <div class="auth-link">
                    Don't have an account?
                    <a href="#" onclick="renderSignup()">Sign Up</a>
                </div>
            </div>

        </div>
    `;
}
function renderSignup() {
    app.innerHTML = `
        <div class="auth-wrapper">

            <div class="auth-card">
                <h1>Create Account</h1>

                <p>
                    Create your Infinity Cinema account to start booking tickets.
                </p>

                <label>Username</label>
                <input type="text" id="new-username" placeholder="Choose a username">

                <label>Password</label>
                <input type="password" id="new-password" placeholder="Create password">

                <button class="auth-btn" onclick="signup()">
                    Create Account
                </button>

                <div class="auth-link">
                    Already have an account?
                    <a href="#" onclick="renderLogin()">Login</a>
                </div>
            </div>

        </div>
    `;
}
function signup() {
    const username = document.getElementById('new-username').value.trim();
    const password = document.getElementById('new-password').value.trim();
    
    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }
    
    // check if user exists
    if (localStorage.getItem("user_" + username)) {
        alert("Username already exists!");
        return;
    }
    
    localStorage.setItem("user_" + username, password);
    
    showAlert(
    "Account Created",
    "Your account has been created successfully. Please log in."
);

showAccount();
}

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    const savedPass = localStorage.getItem("user_" + username);
    
    if (savedPass === password) {
    localStorage.setItem('currentUser', username);
currentUser = username;

afterLoginAction = function() {
    
    const selectedMethod =
        sessionStorage.getItem("selectedPaymentMethod");
    
    if (selectedMethod) {
        
        sessionStorage.removeItem("selectedPaymentMethod");
        sessionStorage.removeItem("redirectAfterLogin");
        
        const lastTicket = myTickets[myTickets.length - 1];
        
        if (lastTicket) {
            renderConfirmation(lastTicket);
            
            setTimeout(() => {
                processPayment(selectedMethod);
            }, 300);
        }
        
    } else {
        navigateTo('movies');
    }
};

showAlert(
    "Success",
    "Login successful!"
);
}
}
function renderProfile() {
    app.innerHTML = `
        <div class="profile-container">
            <h1>My Account</h1>
            <p><strong>Username:</strong> ${currentUser}</p>
            <button class="cta-btn" onclick="logout()">Logout</button>
        </div>
    `;
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    renderLogin();
}
function renderAbout() {
    app.innerHTML = `
        <div class="about-container">
            <h1>About Us</h1>

            <p>
                Welcome to <strong>Infinity Cinema</strong>, a responsive cinema booking
                system developed to provide a simple, convenient, and user-friendly
                movie reservation experience.
            </p>

            <p>
                The system allows users to browse available movies, view movie details,
                select showtimes, choose seats, purchase tickets, and manage their
                bookings through an easy-to-use interface.
            </p>

            <p>
                Infinity Cinema is designed to adapt seamlessly across desktops,
                tablets, and mobile devices, ensuring that users can browse movies,
                select seats, and manage bookings with ease regardless of screen size.
                By utilizing responsive design principles, the system provides a
                consistent, accessible, and enjoyable user experience across various
                platforms.
            </p>

            <p>
                We are <strong>4th Year Computer Science students from BC8MC</strong>,
                and we developed this cinema booking project as part of our academic
                journey to apply our knowledge in web development, user interface design,
                responsive design principles, and software engineering.
            </p>

            <p>
                Through this project, we aimed to create a modern and interactive
                cinema booking platform that demonstrates practical programming
                concepts while delivering a smooth, efficient, and accessible
                booking experience for users.
        </div>
    `;
}
function cancelTicket(ticketId, movieId, showtime) {
    
    showAlert(
        "Cancel Booking",
        "Are you sure you want to cancel this booking?",
        function() {
            
            const ticketIndex = myTickets.findIndex(
                t => t.id === ticketId
            );
            
            if (ticketIndex > -1) {
                const ticket = myTickets[ticketIndex];
                
                if (bookedSeats[movieId]) {
                    bookedSeats[movieId] =
                        bookedSeats[movieId].filter(
                            seat => !ticket.seats.includes(seat)
                        );
                    
                    localStorage.setItem(
                        'bookedSeats',
                        JSON.stringify(bookedSeats)
                    );
                }
                
                myTickets.splice(ticketIndex, 1);
                
                localStorage.setItem(
                    'myTickets',
                    JSON.stringify(myTickets)
                );
                
                renderMyTickets();
            }
        }
    );
}

let alertCallback = null;

function showAlert(title, message, callback = null) {
    document.getElementById("alertTitle").textContent = title;
    document.getElementById("alertMessage").textContent = message;
    
    alertCallback = callback;
    
    const okBtn = document.getElementById("okBtn");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    
    if (callback) {
        // Confirmation dialog
        okBtn.style.display = "none";
        yesBtn.style.display = "inline-block";
        noBtn.style.display = "inline-block";
    } else {
        // Normal alert
        okBtn.style.display = "inline-block";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    }
    
    document.getElementById("customAlert").style.display = "flex";
}

function confirmAlert() {
    document.getElementById("customAlert").style.display = "none";
    
    if (alertCallback) {
        const cb = alertCallback;
        alertCallback = null;
        cb();
    }
}

function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
    
    if (afterLoginAction) {
        const action = afterLoginAction;
        afterLoginAction = null;
        action();
        return;
    }
    
    alertCallback = null;
    
    if (sessionStorage.getItem("goToLogin") === "true") {
        sessionStorage.removeItem("goToLogin");
        showAccount();
    }
}

// Initial Load
window.onload = () => {
    navigateTo('movies');
};

// Expose functions to window for onclick handlers in HTML
window.navigateTo = navigateTo;
window.switchTab = switchTab;
window.selectShowtime = selectShowtime;
window.goToMovieSection = goToMovieSection;
window.goToSeatSelection = goToSeatSelection;
window.toggleSeat = toggleSeat;
window.confirmBooking = confirmBooking;
window.simulatePayment = simulatePayment;
window.cancelTicket = cancelTicket;
window.showAlert = showAlert;
window.closeAlert = closeAlert;

                    
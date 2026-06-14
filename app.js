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
        releaseDate: "May 31, 2026",
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
        runtime: "2h 02min",
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
        id: 5,
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
        title: "Minions & Monster",
        rating: "PG",
        runtime: "1h 29 min",
        releaseDate: "June 30, 2026",
        genre: "Animation, Adventure, Comedy, Sci-Fic",
        director: "Pierre Coffin",
        cast: ["Pierre Coffin", "Allison Janney", "Christoph Waltz"],
        synopsis: "This is the rambunctious, ridiculous and totally true story of how the Minions conquered Hollywood, became movie stars, lost everything, unleashed monsters onto the world and then banded together to try and save the planet from the mayhem they had just created..",
        poster: "minions.jpg",
        status: "coming_soon"
    },
    {
        id: 8,
        title: "Moana",
        rating: "G",
        runtime: "1h 45min",
        releaseDate: "July 08, 2026",
        genre: "Adventure, Comedy, Family, Fantasy",
        director: "Thomas Kail",
        cast: ["Catherine Laga‘aia", "Dwayne Johnson", "Rena Owen"],
        synopsis: "Moana answers the Ocean's call and, for the first time, voyages beyond the reef of her island of Motunui with the infamous demigod Maui on an unforgettable journey to restore prosperity to her people.",
        poster: "moana.jpg",
        status: "coming_soon"
    },
    {
        id: 9,
        title: "Forgotten Island",
        rating: "PG-13",
        runtime: "1h 38 min",
        releaseDate: "September 23, 2026",
        genre: "Adventure, Animation, Comedy, Family, Fantasy",
        director: "Januel Mercado, Joel Crawford",
        cast: ["H.E.R", "Liza Soberano", "Dave Franco"],
        synopsis: "Jo and Raissa find themselves stranded in the mystical world of the forgotten island of Nakali. They discover that their only way home might come at the expense of a lifetime of shared memories.",
        poster: "forgotten.jpg",
        status: "coming_soon"
    },
        {
        id: 10,
        title: "Spider-Man:             Brand New Day",
        rating: "PG-13",
        runtime: "2h 30 min",
        releaseDate: "July 29, 2026",
        genre: "Adventure, Action, Sci-Fic",
        director: "Destin Daniel Cretton",
        cast: ["Tom Holland", "Sadie Sink", "Zendaya"],
        synopsis: "Four years have passed since the events of No Way Home, and Peter is now an adult living entirely alone, having voluntarily erased himself from the lives and memories of those he loves. Crime-fighting in a New York that no longer knows his name, he's devoted himself entirely to protecting his city — a full-time Spider-Man — but as the demands on him intensify, the pressure sparks a surprising physical evolution that threatens his existence, even as a strange new pattern of crimes gives rise to one of the most powerful threats he has ever faced.",
        poster: "spider.jpg",
        status: "coming_soon"
    },
    {
        id: 11,
        title: "Avatar Aang: The Last Airbender",
        rating: "PG-13",
        runtime: "1h 39 min",
        releaseDate: "October 07, 2026",
        genre: "Fantasy, Action",
        director: "Lauren Montgomery",
        cast: ["Eric Nam","Jessica Matten", "Dave Bautista","Steven Yeun", "Dionne Quan","Román Zaragoza"],
        synopsis: "Avatar Aang, the world's last Airbender, learns of an ancient power that could save his culture from extinction. With the help of his friends, he embarks on a global quest to find it before it falls into the wrong hands and threatens to upend the peace they sacrificed everything to achieve.",
        poster: "Aang.jpg",
        status: "coming_soon"
    },
    {
        id: 12,
        title: "The Hunger Games: Sunrise on the Reaping",
        rating: "PG-13",
        runtime: "2h 30 min",
        releaseDate: "November 18, 2026",
        genre: "Action, Adventure, Sci-Fic",
        director: "Francis Lawrence",
        cast: ["Mckenna Grace", "Jennifer Lawrence", "Joseph Zada","Elle Fanning"],
        synopsis: "Return to the world of Panem 24 years before the events of The Hunger Games, starting on the morning of the reaping of the 50th Hunger Games, also known as the Second Quarter Quell.",
        poster: "games.jpg",
        status: "coming_soon"
    }
];

let currentTab = 'now_showing';
let selectedMovie = null;
let selectedShowtime = null;
let selectedSeats = [];
let myTickets = JSON.parse(localStorage.getItem('myTickets')) || [];
let bookedSeats = JSON.parse(localStorage.getItem('bookedSeats')) || []; // 

const app = document.getElementById('app-container');

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

function renderMovieGrid() {
    const filtered = MOVIES.filter(m => m.status === currentTab);
    return filtered.map(movie => `
        <div class="movie-card" onclick="navigateTo('movie-details', {movieId: ${movie.id}})">
            <img src="${movie.poster}" class="movie-poster" alt="${movie.title}">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">${movie.rating} • ${movie.runtime}</div>
                <button class="movie-btn">${movie.status === 'now_showing' ? 'Get Tickets' : 'Notify Me'}</button>
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

    app.innerHTML = `
        <div class="details-container">
            <div class="details-left">
                <div class="back-btn" onclick="navigateTo('movies')"><i class="fas fa-arrow-left"></i> Back</div>
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
                
                ${movie.status === 'now_showing' ? `
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
  onclick="alert('We will notify you when tickets are available!')">
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
        alert("Please select a showtime first!");
        return;
    }
    navigateTo('seat-selection', { movieId: selectedMovie.id, showtime: selectedShowtime });
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
        date: "May 24, 2026",
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

<div id="qrcode"></div>
                </div>
                <p class="disclaimer">Demo QR - School Project Only. No real payment</p>
            </div>
            
            <div class="payment-sim">
                <p style="text-align:center; margin-bottom: 10px; font-weight: bold;">Simulate Payment</p>
                <button class="pay-btn" onclick="simulatePayment()">Cash at Counter</button>
                <button class="pay-btn" onclick="simulatePayment()">GCash</button>
                <button class="pay-btn" onclick="simulatePayment()">Card</button>
            </div>

            <button class="cta-btn" style="width: 100%; margin-top: 20px;" onclick="navigateTo('tickets')">Go to My Tickets</button>
        </div>
    `;
    setTimeout(() => {
    const qr = document.getElementById("qrcode");

    if (qr) {
        new QRCode(qr, {
            text: `${ticket.id}|${ticket.movieTitle}|${ticket.time}|${ticket.seats.join(',')}`,
            width: 120,
            height: 120
        });
    }
}, 100);
}

function simulatePayment() {
    alert("Payment Successful!");
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
                    </div>
                    <button class="cancel-btn"
                        onclick="cancelTicket('${ticket.id}', ${ticket.movieId}, '${ticket.time}')">
                        Cancel
                    </button>
                </div>
            `).join('')}
        </div>
    `;
}
function cancelTicket(ticketId, movieId, showtime) {
    if (confirm("Are you sure you want to cancel this booking?")) {
        const ticketIndex = myTickets.findIndex(t => t.id === ticketId);
        if (ticketIndex > -1) {
            const ticket = myTickets[ticketIndex];
            
            // Return seats to available (remove from bookedSeats)
            if (bookedSeats[movieId]) {
                bookedSeats[movieId] = bookedSeats[movieId].filter(seat => !ticket.seats.includes(seat));
                localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));
            }

            myTickets.splice(ticketIndex, 1);
            localStorage.setItem('myTickets', JSON.stringify(myTickets));
            renderMyTickets();
        }
    }
}

// Initial Load
window.onload = () => {
    navigateTo('home');
};

// Expose functions to window for onclick handlers in HTML
window.navigateTo = navigateTo;
window.switchTab = switchTab;
window.selectShowtime = selectShowtime;
window.goToSeatSelection = goToSeatSelection;
window.toggleSeat = toggleSeat;
window.confirmBooking = confirmBooking;
window.simulatePayment = simulatePayment;
window.cancelTicket = cancelTicket;

                    
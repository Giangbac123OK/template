document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const pageTitle = document.getElementById('pageTitle');
    const navLinks = document.querySelectorAll('.nav-link');

    function loadContent(page) {
        switch(page) {
            case 'dashboard':
                pageTitle.textContent = 'Card Center';
                contentDiv.innerHTML = `
                    <div class="row mb-4">
                        ${['824,571.93', '523.56', '824,571.93', '10,000.45'].map(balance => `
                            <div class="col-md-6 col-lg-3 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Wallet Balance</h5>
                                        <p class="card-text wallet-balance">$${balance}</p>
                                        <div class="d-flex justify-content-between">
                                            <small>VALID THRU 08/21</small>
                                            <small>Adam Jackson</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Main Balance</h5>
                                    <p class="card-text main-balance">$ 98,452.44</p>
                                    <div class="progress mb-3">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <small>VALID THRU 08/21</small>
                                        <small>Adam Jackson</small>
                                    </div>
                                    <div>
                                        <small>NUMBER</small>
                                        <small class="ms-2">**** **** **** 1234</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h5 class="card-title mb-0">Other Card List</h5>
                                        <div>
                                            <button class="btn btn-sm btn-purple me-2">Add Card</button>
                                            <select class="form-select form-select-sm d-inline-block w-auto">
                                                <option>Newest</option>
                                                <option>Oldest</option>
                                            </select>
                                        </div>
                                    </div>
                                    <table class="table table-dark table-hover">
                                        <thead>
                                            <tr>
                                                <th>Card Type</th>
                                                <th>Bank</th>
                                                <th>Card Number</th>
                                                <th>Name in Card</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Primary</td>
                                                <td>ABC Bank</td>
                                                <td>**** **** **** 2256</td>
                                                <td>Franklin Jr.</td>
                                                <td><button class="btn btn-sm btn-link">See Number</button></td>
                                            </tr>
                                            <tr>
                                                <td>Secondary</td>
                                                <td>ABC Bank</td>
                                                <td>**** **** **** 2256</td>
                                                <td>Franklin Jr.</td>
                                                <td><button class="btn btn-sm btn-link">See Number</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            default:
                pageTitle.textContent = page.charAt(0).toUpperCase() + page.slice(1);
                contentDiv.innerHTML = `<h2>${page.charAt(0).toUpperCase() + page.slice(1)} Content</h2>`;
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            loadContent(link.getAttribute('data-page'));
        });
    });

    // Load default content
    loadContent('dashboard');
});
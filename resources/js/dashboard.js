document.addEventListener('DOMContentLoaded', function() {
    // Navigation handling
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSection = item.getAttribute('data-section');
            
            // Update navigation active state
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Update content section visibility
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active', 'fade-in');
                }
            });
        });
    });

    // Slideshow Management
    const slideshowUpload = document.getElementById('slideshow-upload');
    const slideshowPreview = document.querySelector('.slideshow-preview');

    if (slideshowUpload) {
        slideshowUpload.addEventListener('change', function(e) {
            handleImageUpload(e.target.files, slideshowPreview, true);
        });
    }

    // Gallery Management
    const galleryUpload = document.getElementById('gallery-upload');
    const galleryGrid = document.querySelector('.gallery-grid');

    if (galleryUpload) {
        galleryUpload.addEventListener('change', function(e) {
            handleImageUpload(e.target.files, galleryGrid, false);
        });
    }

    // Events Management
    const addEventBtn = document.getElementById('add-event-btn');
    const eventsList = document.querySelector('.events-list');

    if (addEventBtn) {
        addEventBtn.addEventListener('click', () => {
            showEventModal();
        });
    }

    // Attendance Management
    const attendanceDate = document.getElementById('attendance-date');
    const attendanceSection = document.getElementById('attendance-section');
    
    if (attendanceDate && attendanceSection) {
        [attendanceDate, attendanceSection].forEach(element => {
            element.addEventListener('change', () => {
                loadAttendanceData();
            });
        });
    }
});

// Utility Functions
function handleImageUpload(files, container, isSlideshow) {
    Array.from(files).forEach(file => {
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            const imgContainer = document.createElement('div');
            imgContainer.className = isSlideshow ? 'slideshow-item' : 'gallery-item';
            
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'img-fluid';
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm delete-btn';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.onclick = () => imgContainer.remove();
            
            imgContainer.appendChild(img);
            imgContainer.appendChild(deleteBtn);
            container.appendChild(imgContainer);
        };
        reader.readAsDataURL(file);
    });
}

function showEventModal() {
    const modalHTML = `
        <div class="modal fade" id="eventModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Event</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="eventForm">
                            <div class="mb-3">
                                <label class="form-label">Event Title</label>
                                <input type="text" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Date</label>
                                <input type="date" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Description</label>
                                <textarea class="form-control" rows="3" required></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="saveEvent()">Save Event</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = new bootstrap.Modal(document.getElementById('eventModal'));
    modal.show();

    // Clean up modal after hiding
    document.getElementById('eventModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

function saveEvent() {
    const form = document.getElementById('eventForm');
    const eventsList = document.querySelector('.events-list');
    
    // Here you would typically send the data to your backend
    // For now, we'll just add it to the list
    const eventCard = document.createElement('div');
    eventCard.className = 'card mb-3';
    eventCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${form.querySelector('input[type="text"]').value}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${form.querySelector('input[type="date"]').value}</h6>
            <p class="card-text">${form.querySelector('textarea').value}</p>
            <button class="btn btn-danger btn-sm" onclick="this.closest('.card').remove()">
                <i class="fas fa-trash"></i> Delete
            </button>
        </div>
    `;
    
    eventsList.appendChild(eventCard);
    bootstrap.Modal.getInstance(document.getElementById('eventModal')).hide();
}

function loadAttendanceData() {
    const date = document.getElementById('attendance-date').value;
    const section = document.getElementById('attendance-section').value;
    
    // Here you would typically fetch data from your backend
    // For now, we'll just show some dummy data
    const attendanceList = document.getElementById('attendance-list');
    attendanceList.innerHTML = `
        <tr>
            <td>2021-0001</td>
            <td>John Doe</td>
            <td>Section A</td>
            <td>
                <select class="form-select form-select-sm">
                    <option>Present</option>
                    <option>Absent</option>
                    <option>Late</option>
                </select>
            </td>
            <td>
                <button class="btn btn-primary btn-sm">Save</button>
            </td>
        </tr>
    `;
}

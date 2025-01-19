// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



// Save Note Functionality
const saveNoteBtn = document.getElementById('save-note-btn');
const noteInput = document.getElementById('note-input');
const notesList = document.getElementById('notes-list');

if (saveNoteBtn) {
    saveNoteBtn.addEventListener('click', () => {
        const note = document.createElement('p');
        note.textContent = noteInput.value;
        noteInput.value = '';
        notesList.appendChild(note);
    });
}

// Post Blog Functionality
const postBlogBtn = document.getElementById('post-blog-btn');

if (postBlogBtn) {
    postBlogBtn.addEventListener('click', () => {
        const title = document.getElementById('blog-title').value;
        const content = document.getElementById('blog-content').value;

        if (title && content) {
            const popularBlogs = document.getElementById('popular-blogs');
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            blogCard.innerHTML = `
                <img src="assets/default-blog.jpg" alt="New Blog" class="blog-image">
                <h3>${title}</h3>
                <p>${content}</p>`;
            popularBlogs.appendChild(blogCard);

            // Clear the form
            document.getElementById('blog-title').value = '';
            document.getElementById('blog-content').value = '';
            alert('Blog posted successfully!');
        } else {
            alert('Please fill out both the title and content.');
        }
    });
}

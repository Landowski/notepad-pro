
// Start
const db = firebase.firestore();
const auth = firebase.auth();

// DOM elements
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const noteContentElement = document.getElementById('note-content');
const noteTitleElement = document.getElementById('note-title');
const noteTextElement = document.getElementById('note-text');

// Get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Load note
async function loadNote(noteId) {
    try {
    const user = auth.currentUser;
    const noteRef = db.collection('users').doc(user.uid).collection('notes').doc(noteId);
    const noteDoc = await noteRef.get();

    const noteData = noteDoc.data();
    
    document.title = `${noteData.title} - Notepad PRO`;
    noteTitleElement.textContent = noteData.title || '';
    noteTextElement.innerHTML = noteData.text || '';

    const checkboxes = noteTextElement.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.disabled = true;
        if (checkbox.hasAttribute('checked')) {
        checkbox.checked = true;
        }
    });

    loadingElement.style.display = 'none';
    noteContentElement.style.display = 'block';

    } catch (error) {
    loadingElement.style.display = 'none';
    errorElement.style.display = 'block';
    errorElement.textContent = error.message || 'Error loading note.';
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(async (user) => {
    if (user) {
        const noteId = getUrlParameter('noteId');
        if (noteId) {
        await loadNote(noteId);
        } else {
        loadingElement.style.display = 'none';
        errorElement.style.display = 'block';
        errorElement.textContent = 'No note ID was given.';
        }
    } else {
        window.location.href = '/html/login.html';
    }
    });
});
// 1. Map the EXACT text from index.html to your EXACT file names
const toolRoutes = {
    // Ensure these keys match EXACTLY with the <p> text in your HTML tool cards
    "JPG to PDF": "imagetopdf.html",
    "PDF to Word": "pdftoword.html",
    "PDF to Excel": "pdftoexcel.html",
    "Word to PDF": "mswordtopdf.html",
    "Excel to PDF": "msexceltopdf.html",
    "Sign PDF": "signpdf.html",
    "Merge PDF": "mergepdf.html",
    "Split PDF": "splitpdf.html",
    "Compress PDF": "compresspdf.html",
    "Rotate PDF": "rotatepdf.html",
    "Lock PDF": "lockpdf.html",
    "Translate PDF": "translatepdf.html",
    "Add Pages": "addpagespdf.html",
    "AI Summarize PDF": "aisummarizepdf.html",
    "Edit PDF": "editpdf.html",
    "Crop PDF": "croppdf.html",
    "HTML to PDF": "htmltopdf.html",
    "Remove Pages": "removepagespdf.html",
    "Scan to PDF": "scantopdf.html",
    "Organize PDF": "organizepdf.html",
    "Add Watermark": "addwatermarkpdf.html",
    "PDF to JPG": "pdftojpg.html",
    
};
// Double-check that each key here matches the <p> text in your HTML exactly (including spaces and casing)

// 2. Find all tool cards on the page (Only do this once!)
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', function() {
        
        // Get the text inside the <p> tag of the clicked card
        const toolName = this.querySelector('p').innerText.trim();
        
        // Check if the clicked tool exists in our routing map above
        if (toolRoutes[toolName]) {
            // If it exists, redirect the user to that specific HTML file
            window.location.href = toolRoutes[toolName];
        } else {
            // If it doesn't exist yet, show a friendly "coming soon" message
            alert(`The "${toolName}" feature is coming soon!`);
        }
    });
});

function filterTools() {
    const input = document.getElementById('toolSearch');
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('tool-card');

    for (let i = 0; i < cards.length; i++) {
        const toolName = cards[i].getElementsByTagName('p')[0].innerText;
        if (toolName.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = ""; // Show
        } else {
            cards[i].style.display = "none"; // Hide
        }
    }
}
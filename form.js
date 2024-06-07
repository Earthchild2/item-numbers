function calculate() {
    let maths = Number(document.getElementById('maths').value);
    let geography = Number(document.getElementById('geography').value);
    let english = Number(document.getElementById('english').value);
    let physics = Number(document.getElementById('physics').value);
    let biology = Number(document.getElementById('biology').value);
    let history = Number(document.getElementById('history').value);
    let agriculture = Number(document.getElementById('agriculture').value);
    
    let marks = (maths + geography + english + physics + biology + history + agriculture);
    let totalmark = marks / 7;
    let results = document.getElementById('display')
    results.innerHTML = 'your total mark is: ' + totalmark.toFixed(1) + '%';
}

// let tryCount = 1

function loadBase() {
    let startPage = 
    `<main>
      <nav>
        <div class="correct-num">
        0
        </div>
        Filmvia
        <div class="incorrect-num">
        0
        </div>
      </nav>
        
      <section class="quiz-area">
        So you think you\'re a film buff eh?
      </section>
      <button class="start-button">
      CLICK TO START
      </button>
    </main>`
  $("body").prepend(startPage)
  }
  loadBase();

  let i = 0;
  let correct = 0;
  let incorrect = 0;
  function displayResults (){
    console.log('Display Results Test');
  }

  $('.start-button').click(function() {
      $('.quiz-area').html(quizQuestions[i].qText)
      $('button').replaceWith(`<button class="next-button" id="nxt">Next Question!</button>`)
      for(op = 0; op < quizQuestions[i].qOptions.length; op++) {
      $('.quiz-area').append(`<button class="option" id="${op}">${quizQuestions[i].qOptions[op].optionText}</button>`)
      }
    i++
  });

  // function resultsPage() {
  //   $('quiz-area').html(`You got ${correct} out of ${quizQuestions.length} questions right! And ${incorrect} out of ${quizQuestions.length} wrong. Great job! Want to try again? :)`)
  //   $('div').html("");
  //   $('#nxt').removeClass('next-button').addClass("restart-button").html("Retry Quiz???");
  // }

  // resultsPage();

  $('body').on('click', '.option', function() {
    $('.option').attr("disabled", "disabled")
    $("#nxt").removeClass(".start-button").addClass("next-button");
    let selectedOption = (this.id)
    if (quizQuestions[i].qOptions[selectedOption].optionCorrect === true) {
      correct++
      $(`#${this.id}`).css("border", "5px solid green").html("Correct!")
      $(".correct-num").html(`${correct}`)
    }
  else {
      incorrect++
      $(`#${this.id}`).css("border", "5px solid red").html("WRONG!")
      $(".incorrect-num").html(`${incorrect}`)
  }

  i = correct + incorrect

  $('body').on('click', '.next-button', function() {
    if (i < quizQuestions.length) {
      $('.quiz-area').html(quizQuestions[i].qText)
      for(op = 0; op < quizQuestions[i].qOptions.length; op++) {
      $('.quiz-area').append(`<button class="option" id="${op}">${quizQuestions[i].qOptions[op].optionText}</button>`)
      }
    }
    else {
      $('.quiz-area').html(`You got ${correct} out of ${quizQuestions.length} questions right! Great job! Want to try again? :)`)
      $('div').html("");
      $('#nxt').removeClass('next-button').addClass("restart-button").html("Retry Quiz???");
    }
  });
});

$('body').on('click', '.restart-button', function() {
  location.reload(true)
});

    // else (i+1 = quizQuestions.length()) {
    //   resultsPage();
  

  
    
  
//     $('body').on('click', '.restart-button', function() {
//       // tryCount++;
//       // quizApp ()
//       location.reload(true)
//     });

    const quizQuestions = [ 
      {qText: "How many movies are in Christopher Nolan’s Batman series?", qOptions: [
        {optionText: "3", optionCorrect: true},
        {optionText: "4", optionCorrect: false},
      ]},
      {qText: "What was Pixar’s first animated movie?", qOptions: [
        {optionText: "Toy Story", optionCorrect: true},
        {optionText: "Nemo", optionCorrect: false},
      ]},
      {qText: "Where did Harry Potter go to school?", qOptions: [
        {optionText: "The Academy", optionCorrect: false},
        {optionText: "Hogwarts", optionCorrect: true},
      ]},
      {qText: "What was Darth Vaders real name?", qOptions: [
        {optionText: "Anakin Skywalker", optionCorrect: true},
        {optionText: "Rey Kenobi", optionCorrect: false},
      ]},
      {qText: "How do Anna and Elsa know each other in Frozen?", qOptions: [
        {optionText: "Childhood Friends", optionCorrect: false},
        {optionText: "Sisters", optionCorrect: true},
      ]},
      {qText: "Who destroyed the One Ring?", qOptions: [
        {optionText: "Frodo", optionCorrect: true},
        {optionText: "Biblo", optionCorrect:false},
      ]},
      {qText: "The Fault in our Stars explores the drama of sexual abuse?", qOptions: [
        {optionText: "True", optionCorrect: false},
        {optionText: "False", optionCorrect: true},
      ]},
    {qText: "'Here’s to looking at you kid' is from what movie?", qOptions: [
        {optionText: "What Women Want", optionCorrect: false},
        {optionText: "Casablanca", optionCorrect: true},
        {optionText: "It’s a Wonderful Life", optionCorrect: false},
      ]},
      {qText: "Who won their second Oscar in successive years for Forrest Gump?", qOptions: [
        {optionText: "Tom Hanks", optionCorrect: true},
        {optionText: "Meryl Streep", optionCorrect: false},
        {optionText: "Charlton Heston", optionCorrect: false},
      ]},
      {qText: "Who was the Pretty Woman in the 1990 film with Richard Gere?", qOptions: [
        {optionText: "Julia Roberts", optionCorrect: true},
        {optionText: "Meg Ryan ", optionCorrect: false},
        {optionText: "Diane Keaton", optionCorrect: false},
      ]},
      {qText: "Luke Skywalker grew up on this planet?", qOptions: [
        {optionText: "Coruscant", optionCorrect: false},
        {optionText: "Hoth", optionCorrect: false},
        {optionText: "Tatooine", optionCorrect: true},
      ]},
      {qText: "Who plays the Joker in the Dark Knight?", qOptions: [
        {optionText: "Joaquin Phoenix", optionCorrect: false},
        {optionText: "Jake Gyllenhaal", optionCorrect: false},
        {optionText: "Heath Ledger", optionCorrect: true},
      ]},
      {qText: "What planet are the transformers from?", qOptions: [
        {optionText: "Nebulos", optionCorrect: false},
        {optionText: "Cybertron", optionCorrect: true},
        {optionText: "Hydrus", optionCorrect: false},
      ]},
      {qText: "What district is Katniss from?", qOptions: [
        {optionText: "District 9", optionCorrect: false},
        {optionText: "District 12", optionCorrect: true},
        {optionText: "District 13", optionCorrect: false},
      ]},
      {qText: "When did Singing in the Rain originally come out?", qOptions: [
        {optionText: "1980", optionCorrect: false},
        {optionText: "1952", optionCorrect: true},
        {optionText: "2002", optionCorrect: false},
        {optionText: "1943", optionCorrect: false},
      ]},
      {qText: "Which is an infinity stone?", qOptions: [
        {optionText: "Spirit", optionCorrect: false},
        {optionText: "Enchantment", optionCorrect: false},
        {optionText: "Infinity", optionCorrect: false},
        {optionText: "Mind", optionCorrect: true},
      ]},
      {qText: "Who directed Pulp Fiction?", qOptions: [
        {optionText: "Martin Scorsese", optionCorrect: false},
        {optionText: "Quentin Tarantino", optionCorrect: true},
        {optionText: "Steven Spielberg", optionCorrect: false},
        {optionText: "James Cameron", optionCorrect: false},
      ]},
      {qText: "What island is Jurassic Park on?", qOptions: [
        {optionText: "Isla Cruces", optionCorrect: false},
        {optionText: "Isla Fritos", optionCorrect: false},
        {optionText: "Isla Nublar", optionCorrect: true},
        {optionText: "Isla Jurassic", optionCorrect: false},
      ]},
      {qText: "Where did Jack Torrance go homicidal?", qOptions: [
        {optionText: "Inside the Lost Cave", optionCorrect: false},
        {optionText: "Under the Church of Peter", optionCorrect: false},
        {optionText: "Before the Graveyard of Turin", optionCorrect: false},
        {optionText: "At the Overlook Hotel", optionCorrect: true},
      ]},
      {qText: "This object is the recurring 'villain' in the Conjuring-verse?", qOptions: [
        {optionText: "Porcelain doll", optionCorrect: true},
        {optionText: "Teddy bear", optionCorrect: false},
        {optionText: "Painting of a smiling baby", optionCorrect: false},
        {optionText: "Children’s book", optionCorrect: false},
      ]},
      {qText: "My Big Fat Greek Wedding began as a...?", qOptions: [
        {optionText: "Book", optionCorrect: false},
        {optionText: "Stage Show", optionCorrect: true},
        {optionText: "TV show", optionCorrect: false},
        {optionText: "Comic Strip", optionCorrect: false},
      ]},
     {qText: "Who is the first actor to play Jack Ryan on screen?", qOptions: [
        {optionText: "Harrison Ford", optionCorrect: false},
        {optionText: "Ben Affleck", optionCorrect: false},
        {optionText: "John Krasinski", optionCorrect: false},
        {optionText: "Chris Pine", optionCorrect: false},
        {optionText: "Alec Baldwin", optionCorrect: true},
      ]},
     {qText: "Which couple was alive and together at the end of the movie or show?", qOptions: [
        {optionText: "Jack Dawson & Rose Dewitt Bukater", optionCorrect: false},
        {optionText: "Jim Halpert & Pam Beesly", optionCorrect: true},
        {optionText: "Allie Calhoun & Noah Calhoun", optionCorrect: false},
        {optionText: "Elizabeth Bennet & Mr. Bingley", optionCorrect: false},
        {optionText: "Sebastian Wilder & Mia Dolan", optionCorrect: false},
      ]},
      {qText: "In the original Star Trek, the primary First Officer was played by?", qOptions: [
        {optionText: "Gene Roddenberry", optionCorrect: false},
        {optionText: "Christopher Judge", optionCorrect: false},
        {optionText: "William Shatner", optionCorrect: false},
        {optionText: "Leonard Nimoy", optionCorrect: true},
        {optionText: "S'chn T'gai Spock", optionCorrect: false},
      ]},
      {qText: "When did the Dark Lord Sauron forge the One Ring?", qOptions: [
        {optionText: "Before Middle Earth Began", optionCorrect: false},
        {optionText: "At the formation of Morodor", optionCorrect: false},
        {optionText: "In the Silmarillion Era", optionCorrect: false},
        {optionText: "After the fall of Dunis Merth", optionCorrect: false},
        {optionText: "During the 2nd Age", optionCorrect: true},
      ]},
      {qText: "What is the highest grossing film of all-time. Adjusted for inflation?", qOptions: [
        {optionText: "Gone with the Wind - 1939", optionCorrect: true},
        {optionText: "Avatar - 2009", optionCorrect: false},
        {optionText: "Titanic - 1997", optionCorrect: false},
        {optionText: "Star Wars - 1977", optionCorrect: false},
        {optionText: "Endgame - 2019", optionCorrect: false},
      ]},
    {qText: "Who killed the Wicked Witch of the West?", qOptions: [
        {optionText: "Glinda", optionCorrect: false},
        {optionText: "The Wizard of Oz", optionCorrect: false},
        {optionText: "Tinman", optionCorrect: false},
        {optionText: "Toto", optionCorrect: false},
        {optionText: "Dorothy", optionCorrect: true},
      ]},
      {qText: "Which movie has no soundtrack?", qOptions: [
        {optionText: "American Sniper", optionCorrect: false},
        {optionText: "The Room", optionCorrect: false},
        {optionText: "No Country for Old Men", optionCorrect: true},
        {optionText: "The Birds", optionCorrect: false},
        {optionText: "Cast Away", optionCorrect: false},
      ]},
    ];
console.log('app');
console.log($('.js-form'))
var userText = $('#user-text').val();
var totalWords = countWords(userText);



// $('.js-form').submit(function(event){
// 	event.preventDefault();
// 	console.log('submit happened');
// 	console.log(uniqueWordCount(userText, totalWords));
// 	console.log(avgWordLength(userText, totalWords));
// 	reportOnText(userText);
// })

function countWords(userText) {
	return userText.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort().length;
}

function uniqueWordCount(userText, totalWords) {
	var result = [];
	var userText = userText.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort()
	for (i = 0; i < totalWords; i++) {
		if (!result.includes(userText[i])) {
			result.push(userText[i]);
		}
	}
	return result;
}

function avgWordLength(userText, totalWords) {
	var charTotal = 0;
	for (i = 0; i < userText.length; i++) {
		charTotal += userText[i].length;
	}
	var avgFormula = charTotal / totalWords;
	return avgFormula
}




// function tokenizeText(userText) {
//   return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
// }


// function removeReturns(userText) {
//   return text.replace(/\r?\n|\r/g, "");
// }



// // generate and display analytics on text

// function reportOnText(userText) {
//   // tokenize our text then compute our data points

//   var tokens = tokenizeText(userText);
//   var numDistinctWords = uniqueWordCount(tokens);
//   var numTotalWords = totalWords;
//   var averageWordLength = avgWordLength(tokens);

//   // take our data and display it in the dom
//   var textReport = $('.js-text-report');
//   textReport.find('.js-word-count').text(numTotalWords);
//   textReport.find('.js-unique-word').text(numDistinctWords);
//   textReport.find('.js-avg-length').text(
//     averageWordLength + " characters");
//   textReport.removeClass('hidden');
// }

function reportOnText(userText) {
	var uniqueWord = uniqueWordCount(userText, totalWords);
	var avgLength = avgWordLength(userText, totalWords);
	var textReport = ('.js-text-report');
	textReport.find('.js-word-count').text(totalWords);
	textReport.find('.js-unique-word').text(uniqueWord);
	textReport.find('.js-avg-length').text(avgLength + " characters");
	textReport.removeClass('hidden');
}

// Watch for and handle form submissions
function watchFormSubmission() {
  $('.js-text-form').submit(function(event) {
    event.preventDefault();
    // get the text the user submitted
    var userText = $('#user-text').val();
    reportOnText(userText);
  });
}

// equivalent to `$(document).ready(function() {...})`
$(function() {
  watchFormSubmission();
});
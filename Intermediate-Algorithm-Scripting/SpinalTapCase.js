//Spinal Tap Case Passed
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}
// /s ==> used to find whitespaces
// ?=[A-Z] ==> used to find words starting with A-Z
  
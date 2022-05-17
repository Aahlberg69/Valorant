/*Ändra videon visad från video 1-2, gör knappen osynlig och gör nästa synlig*/
function nextvid1() {
  document.getElementsByClassName("vid1")[0].src="../videos/2.mp4"
  document.getElementsByClassName("button1")[0].style.visibility = 'hidden'
  document.getElementsByClassName("button2")[0].style.visibility = 'visible'
}
/*Ändra videon visad från video 2-3, gör knappen osynlig och gör nästa synlig*/
function nextvid2() {
  document.getElementsByClassName("vid1")[0].src="../videos/3.mp4"
  document.getElementsByClassName("button2")[0].style.visibility = 'hidden'
  document.getElementsByClassName("button3")[0].style.visibility = 'visible'
  }
/*Ändra videon visad från video 3-4, gör knappen osynlig och gör nästa synlig*/
function nextvid3() {
  document.getElementsByClassName("vid1")[0].src="../videos/4.mp4"
  document.getElementsByClassName("button3")[0].style.visibility = 'hidden'
  document.getElementsByClassName("button4")[0].style.visibility = 'visible'
}
/*Ändra videon visad från video 4-5, gör knappen osynlig och gör nästa synlig*/
function nextvid4() {
    document.getElementsByClassName("vid1")[0].src="../videos/5.mp4"
    document.getElementsByClassName("button4")[0].style.visibility = 'hidden'
    document.getElementsByClassName("button5")[0].style.visibility = 'visible'
  }

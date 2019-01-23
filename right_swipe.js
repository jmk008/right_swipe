/* The function selects the right swipe button and clicks */

func = setInterval(function() {
 var right_swipe  = document.getElementsByClassName("recsGamepad__button--like")
  right_swipe[0].click()
}, 2000) /* 1000 indicates time in second, 2000 = 2sec interval between swipes*/
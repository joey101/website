Helloooooooo and "wElCoMe tO mY yOuTuBe cHaNnEl",

## Intro: 
Sooooo, New project, I was so sick and tired of all the parking tickets get, so I 
wanted to create an object detection program witha  raspberry pi that would alert me
every time a parking officer comes passed.

BUT I have no clue anything about object detection or machine learning or of the sort,
so I am going to start learning from scratch, I will be using libraries to assist, 
but also will be blogging the different types of algorithms and how an object is actually detected,
within an image.

## Looking into:
- What is single point resampling (SSIM)?
    - Structural Similarity Index Measure: The SSIM is a method for comparing two images and determining how similar they are. It takes into account three aspects of the images: the overall brightness, the contrast between the pixels, and the structure of the pixels (how they are correlated with their neighbors). The SSIM produces a score between -1 and 1, where a score of 1 means the images are identical and a score of -1 means the images are completely different. The SSIM is often used to evaluate the quality of images and videos, and it is also used in some machine learning applications.
- What is weighted average re-sampling?
    - Here's how it works: we have the old image and we want to make it into a new image that is either bigger or smaller. We look at each pixel in the old image and we figure out which pixel in the new image it should go to. We give each pixel a number based on how close it is to the new pixel. Pixels that are closer get a bigger number and pixels that are farther away get a smaller number. Then we add up all the numbers and we use that to figure out what color the new pixel should be.
    That's weighted average resampling! It helps us make new images that look smooth and clear, whether they are bigger or smaller than the old image.
- What is colour Histogram Comparison?
    - To compare two color histograms, we can look at how different the colors are in each picture. We can add up all the differences and get a number that tells us how similar or different the pictures are. This is called color histogram comparison.
    Color histogram comparison is a good way to compare pictures because it helps us see how the colors are different. It's like a puzzle: if the colors in the two pictures fit together perfectly, then the pictures are very similar. But if the colors are all mixed up and don't match, then the pictures are very different.
- What is Mean Squared Error (MSE)?
    - Sometimes we want to compare two pictures to see how similar they are. One way we can do that is by looking at how different the pixels are in each picture. We can add up all the differences and then square them. This makes the big differences even bigger and the small differences even smaller. Then we divide the total by the number of pixels to get an average difference. This is called the mean squared error, or MSE.

[back](../projects/object_detection.html)

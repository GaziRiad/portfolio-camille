### Hello camille,

## Please read this file to easily manipulate the template pages.

## This is a module structure i've built to help you easily make changes:

1 - First copy the first.html page and create a new page for a template project in the projects folder (eg: project.html).

2 - past the content in the newly created page.

3 - change page title in the Head element only.

4 - In the main html tag, the first section change the hero text content after that section there is the main image change only it's src attribut to the one that you want.

5 - now you have the "template-section" basically all changebale section:
-- If you want you can add below the "section-description" tags like this :

            <div class="tag-box">
              <span class="tag">Wireframes</span>
              <span class="tag">Prototypes</span>
            </div>

-- If you want you can add below that an img or multiple imgs like this :

          <img
            src="../assets/page images/image-2@2x.png"
            alt="design of anna money app by camille brunette"
            class="section-img"
          />

-- If you want you can add below the image a block of text and it is optional to have tags block too, like this :

          <div class="details-box">
            <div class="text-box">
              <p class="text-box--title">VAT Return Filing</p>
              <p class="text-box--description">
                Using a direct link to HMRC and with all of these great features
                and even I did some copywriting here. I created wireframes, and
                I worked with a UI designer who finalised the appearance.
              </p>
            </div>
            <div class="tag-box">
              <span class="tag">Wireframes</span>
              <span class="tag">Prototypes</span>
            </div>
          </div>

-- If you want you can add a block of 2 Image side by side, like this :

          <div class="double-imgs">
            <img
              src="../assets/page images/image-6@2x.png"
              alt="design of anna money app by camille brunette"
              class="section-img"
            />
            <img
              src="../assets/page images/image-7@2x.png"
              alt="design of anna money app by camille brunette"
              class="section-img"
            />
          </div>

6 - Now you can create multiple sections in this way.

7 - Just leave the rest (portfolio & footer) as it is, just make sure to update projects urls.

8 - Also make sure to update projects urls in home page & portfolio page.

9 - Overall, even without this the code is self explanatory.

10 - If you want to (add, modify, delete) animations just add this code to the element you want:

    <div data-aos="fade-right" data-aos-duration="1000">
      <span class="tag">Wireframes</span>
      <span class="tag">Prototypes</span>
    </div>

-- You can always check their library page: https://michalsnik.github.io/aos/

See you next time 👋

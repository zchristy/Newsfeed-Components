// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandArticle = this.expandArticle.bind(this)
    this.expandButton.addEventListener('click', this.expandArticle);

    //==== Stretch Goal ====
    this.readButton = this.domElement.querySelector('.readButton');
    this.readButton.textContent = 'Done Reading - Delete';
    this.deleteArticle = this.deleteArticle.bind(this);
    this.readButton.addEventListener('click', this.deleteArticle);
  }
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
  }

  //==== Stretch Goal ====
  deleteArticle() {
    this.domElement.classList.add('article-delete');
  }
}

/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll('.article');

articles.forEach(function(domElement) {
  new Article(domElement);
});

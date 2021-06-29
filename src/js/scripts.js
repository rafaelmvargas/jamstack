document.addEventListener('click', clickHandlers)

// store the link plus the API key in a variable
const key = 'Se941wouTHp2wvWJwnmaw1UGRxXGeAyd'
const API = `https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=${key}`

function clickHandlers(event) {
  if (!event.target.matches('button')) return
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results))
}

// function showData(stories) {
//   console.log(stories[0].title)
//   var looped = ''
//   for (let story of stories) {
//     console.log(story)
//     looped += `
//     <div class="item">
//         <h3>${story.title}</h3>
//         <p>${story.abstract}</p>
//     </div>
//     `
//   }
//   document.querySelector('.stories').innerHTML = looped
// }

// function showData(stories) {
//   var looped = stories
//     .map(
//       (result) => `
//     <div class="item">
//     <img src="${results.multimedia.url}" />
//       <h3>${result.title}</h3>
//       <p>${result.abstract}</p>
//       <p>${result.caption ? result.caption : ''}</p>
//     </div>
//   `
//     )
//     .join('')

//   document.querySelector('.stories').innerHTML = looped
// }

// TODO:HW include author and picture and lay it out in CSS
/**
 * Add:
 * 1. author
 * 2. an image
 * 3. caption
 * 4. click title, go to article
 * 5. target attributes to keep page open // why not security #20
 * jamstack-classone
 */

function showData(stories) {
  var looped = stories
    .map((story) => {
      return `
    <div class="item">
      <h3><a href="${story.url}" target="_blank">${story.title}</a></h3>
      <h5 class="byline">${story.byline}</h5>
      <figure>
        <img
          src="${story.multimedia[0].url}"
          alt="${story.multimedia[0].copyright}"
          class="articleMainPicture"
        />
        <figcaption>${
          story.multimedia[0].caption
            ? story.multimedia[0].caption
            : 'Copyright nytimes.com'
        }</figcaption>
      </figure>

      <p>${story.abstract}</p>

      
    </div>
        `
    })
    .join('')

  document.querySelector('.stories').innerHTML = looped
}

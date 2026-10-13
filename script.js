// 1. The array of emoji codes (decimal numbers)
const emojiCodes = [128512, 128514, 129315, 128525, 128526, 129300,
                    128564, 129299, 127827, 129419, 128014, 9810]

// 2. Find the empty gallery container in the HTML
const gallery = document.getElementById('gallery')

// 3. The function that builds the gallery
function showEmojis(count = emojiCodes.length) {
  // Clear whatever is already in the gallery (prevents duplicates)
  gallery.innerHTML = ''

  // Loop through the first "count" emojis
  for (let i = 0; i < count; i++) {
    const code = emojiCodes[i]

    // Create the card
    const card = document.createElement('div')
    card.classList.add('card')

    // Create the emoji part
    const emoji = document.createElement('div')
    emoji.classList.add('emoji')
    emoji.textContent = String.fromCodePoint(code)

    // Create the code part
    const codeText = document.createElement('div')
    codeText.classList.add('code')
    codeText.textContent = code

    // Put the emoji and code inside the card, then the card in the gallery
    card.appendChild(emoji)
    card.appendChild(codeText)
    gallery.appendChild(card)
  }
}

// 4. Show all emojis when the page loads
showEmojis()
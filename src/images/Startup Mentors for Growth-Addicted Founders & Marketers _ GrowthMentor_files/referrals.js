const urlParams = new URLSearchParams(window.location.search)
const ref = urlParams.get('ref')

if (ref) {
  const now = new Date()
  const ONE_MONTH = now.setMonth(now.getMonth() + 1)
  const expires = new Date(ONE_MONTH).toUTCString()
  document.cookie = `ref=${ref}; expires=${expires}; domain=.growthmentor.com`

  fetch('https://app.growthmentor.com/api/v1/referrals/views', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ref,
    }),
  })
    .then(() => {})
    .catch(() => {})
}

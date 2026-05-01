export default defineNuxtPlugin(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  function resetScrollToTop() {
    if (window.location.hash) {
      return
    }

    const root = document.documentElement
    const body = document.body
    const rootScrollBehavior = root.style.scrollBehavior
    const bodyScrollBehavior = body.style.scrollBehavior

    root.style.scrollBehavior = 'auto'
    body.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    root.style.scrollBehavior = rootScrollBehavior
    body.style.scrollBehavior = bodyScrollBehavior
  }

  window.addEventListener('pageshow', resetScrollToTop)

  resetScrollToTop()
  requestAnimationFrame(resetScrollToTop)
  window.setTimeout(resetScrollToTop, 150)
  window.setTimeout(resetScrollToTop, 700)
})

export function useSectionScroll() {
  function scrollToSection(id: string) {
    const target = document.getElementById(id)

    target?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return { scrollToSection }
}

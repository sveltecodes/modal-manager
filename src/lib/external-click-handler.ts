/**
 * A function for detecting clicks outside of a given element and
 * returns an object with a destroy method to remove the event listener
 * when it is no longer needed due to the element being removed from the DOM.
 *
 * @param child The child element to check if clicked outside of.
 * @returns An object with a destroy method to remove the event listener.
 */
export const externalClickHandler = (child: HTMLElement) => {
	// Determine if clicked element is outside the passed node or not.
	const clicked = (event: any) => {
		if (child && !child.contains(event.target) && event.srcElement.getAttribute("data-select-item") != "") {
			console.log(event);
			child.dispatchEvent(new CustomEvent("blur", { detail: event }));
		}
	};

	// Listen for click events in the capture phase, so that we
	// can cancel them without interfering with other click
	// handlers on the same element.
	document.addEventListener("click", clicked, true);

	// Return a function that removes the event listener.
	return {
		destroy() {
			document.removeEventListener("click", clicked, true);
		}
	};
};

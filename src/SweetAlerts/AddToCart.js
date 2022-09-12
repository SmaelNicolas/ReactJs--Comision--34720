import Swal from "sweetalert2";

export const AddToCartAlert = (title, quantity) => {
	Swal.fire({
		text: `Agregaste ${quantity} ${title}`,
		target: "#custom-target",
		customClass: {
			container: "position-absolute",
		},
		timer: 1700,
		toast: true,
		position: "bottom-left",
	});
};

import toast from "react-hot-toast";

function Toast(msg, type = "success") {
	if (type === "success") {
		toast.success(msg, {
			style: {
				border: "1px solid #56D08A",
				padding: "16px",
				color: "#0e1111",
			},
			iconTheme: {
				primary: "#56D08A",
				secondary: "#FFFAEE",
			},
			duration: 5000,
		});
	} else if ((type = "error")) {
		toast.error(msg, {
			style: {
				border: "1px solid #FF0000",
				padding: "16px",
				color: "#0e1111",
			},
			iconTheme: {
				primary: "#FF0000",
				secondary: "#FFFAEE",
			},
			duration: 5000,
		});
	}
}

export default Toast;

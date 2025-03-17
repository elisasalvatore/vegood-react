import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import APIContext from "../../store/apiContext";

export const LoadMoreBtn = () => {
	const { recipes, setVisible } = useContext(APIContext);
	const [, setMoreData ] = useState([]);
	
	const loadMore = () => {
		setMoreData(prevData => [...prevData, ...recipes]);
		setVisible(prevVisible => prevVisible + 6);
	}

	return (
		<>
				<button onClick={loadMore} className="w-[40px] h-[40px] lg:text-[18px] 2xl:w-[60px] 2xl:h-[60px] 2xl:text-[20px] 2xl:text-[22px] rounded-[50%] font-bold rounded bg-transparent text-orangeCustom border-3 border-orangeCustom cursor-pointer hover:bg-orangeCustom hover:text-whiteCustom flex items-center justify-center">
					<FaPlus />
				</button>
		</>
	);
};

function App() {
	return (
		<div className=" bg-slate-200 text-center m-auto  absolute top-0 left-0 right-0 bottom-0 pt-[15%]">
			<h1 className="text-gray-700 text-center font-extrabold text-5xl">
				Increment/Decrement counter
			</h1>
			<h5 className="text-gray-700 text-center font-extrabold text-2xl my-5">
				using React and REDUX!
			</h5>
			<button className="h-10 w-10 rounded-md bg-slate-400 text-black font-extrabold mx-2 hover:bg-slate-500">
				-
			</button>
			{0}
			<button className="h-10 w-10 rounded-md bg-slate-400 text-black font-extrabold mx-2 hover:bg-slate-500">
				+
			</button>
		</div>
	);
}

export default App;

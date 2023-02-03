export default function Product_card() {
    return (
        <div className="p-2 bg-slate-50 w-fit mr-2 mt-3 flex flex-col justify-center p-3 rounded-lg shadow-lg">
            <img src={"https://picsum.photos/200"} />
            <div className="font-sans font-bold text-lime-800 mt-1">Dread de agulha</div>
            <div className="text-sm font-sans mt-2">Dread feito de cabelo e tal e tudo mais</div>
            <div className="mt-4">
                <button className="bg-lime-800 font-bold text-white p-2 rounded-lg">
                    R$ 14.90
                </button>
            </div>
        </div>
    )
}
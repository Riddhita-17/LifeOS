function ProgressCard() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md border border-pink-100">

      <h2 className="text-2xl font-bold">

        Weekly Progress

      </h2>

      <div className="mt-6">

        <div className="w-full bg-pink-100 rounded-full h-4">

          <div className="bg-pink-500 h-4 rounded-full w-[82%]"/>

        </div>

        <p className="mt-4">

          82% Completed

        </p>

      </div>

    </div>
  );
}

export default ProgressCard;
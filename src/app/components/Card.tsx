interface Props {
  onClick: () => void
  name: string
  description: string
}
const Card = ({ onClick, name, description }: Props) => {
  return (
    <div
      className="w-72 rounded-xl px-6 mx-5 overflow-hidden shadow-xl bg-indigo-800 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center px-auto my-2">
        <svg
          width="74px"
          height="74px"
          viewBox="0 0 1024 1024"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M804.6 473.9v292.6c0 21.9-17.8 39.7-39.7 39.7H259.7c-21.9 0-39.7-17.8-39.7-39.7V473.9h-18.8c-21.9 0-39.7-17.8-39.7-39.7v-68.3c0-21.9 17.8-39.7 39.7-39.7h622.1c21.9 0 39.7 17.8 39.7 39.7v68.3c0 21.9-17.8 39.7-39.7 39.7h-18.7z"
              fill="#FFFFFF"
            ></path>
            <path
              d="M764.9 832.7H259.7c-36.5 0-66.2-29.7-66.2-66.2V499.9c-32.9-3.8-58.5-31.9-58.5-65.7v-68.3c0-36.5 29.7-66.2 66.2-66.2h622.1c36.5 0 66.2 29.7 66.2 66.2v68.3c0 33.9-25.6 61.9-58.5 65.7v266.6c0.1 36.5-29.6 66.2-66.1 66.2z m-563.7-480c-7.3 0-13.2 5.9-13.2 13.2v68.3c0 7.3 5.9 13.2 13.2 13.2h45.2v319.1c0 7.3 5.9 13.2 13.2 13.2h505.3c7.3 0 13.2-5.9 13.2-13.2V447.4h45.2c7.3 0 13.2-5.9 13.2-13.2v-68.3c0-7.3-5.9-13.2-13.2-13.2H201.2z"
              fill="#000000"
            ></path>
            <path d="M473.3 492.3h78v295.4h-78z" fill="#2e89ff"></path>
            <path d="M239.5 447.4h545.6v51.7H239.5z" fill="#000000"></path>
            <path
              d="M305.751 228.226l19.659-11.35c15.502-8.95 35.246-3.952 44.665 11.163l41.115 66.213-104.068 2.35-13.486-23.16c-9.237-15.799-3.82-36.016 11.979-45.252 0.05 0.086 0.05 0.086 0.136 0.036z"
              fill="#2e89ff"
            ></path>
            <path
              d="M277.11 350.417l-29.174-50.129c-23.786-41-9.93-93.801 31.069-117.588l0.26-0.15 19.658-11.35c40.444-23.35 91.48-10.553 116.078 29.053l90.15 144.944-228.041 5.22z m28.641-122.19l-0.346 0.2c-15.539 9.086-20.906 29.39-11.806 45.151l13.437 23.073 104.154-2.399-41.115-66.213c-9.52-15.288-29.163-20.113-44.665-11.163l-19.659 11.35zM414.8 492.3h58.5v295.4h-58.5zM551.3 492.3h58.5v295.4h-58.5z"
              fill="#000000"
            ></path>
            <path
              d="M716.76 228.266l-19.66-11.35c-15.501-8.95-35.245-3.952-44.665 11.163l-41.115 66.213 104.068 2.349 13.437-23.073c9.237-15.798 3.82-36.015-11.979-45.252l-0.086-0.05z"
              fill="#2e89ff"
            ></path>
            <path
              d="M745.364 350.32l-228.041-5.22 90.15-144.943c24.649-39.694 75.634-52.404 116.078-29.054l20.611 11.9c19.509 11.61 33.455 30.054 39.262 51.997 5.88 22.217 2.787 45.373-8.8 65.241l-29.26 50.08zM611.27 294.38l104.068 2.349 13.487-23.16c4.4-7.62 5.655-16.596 3.386-25.065-2.22-8.556-7.707-15.65-15.278-20.137l-19.832-11.45c-15.589-9-35.196-4.039-44.666 11.163l-41.165 66.3z"
              fill="#000000"
            ></path>
          </g>
        </svg>
      </div>

      <div className=" py-4">
        <div className="font-bold text-xl mb-2 text-white">Product {name}</div>
        <p className="text-white text-base">{description}</p>
      </div>

      <div className=" py-4">
        <button className="bg-indigo-600 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16 4a2 2 0 0 0-2 2h-2a2 2 0 0 0-4 0H6a2 2 0 0 0-2-2 1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM8 14H6v-2h2v2zm0-4H6V7h2v3zm10 4h-2v-2h2v2zm0-4h-2V7h2v3z" />
          </svg>
          Details
        </button>
      </div>
    </div>
  )
}

export default Card

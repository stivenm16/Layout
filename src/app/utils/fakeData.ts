interface CardT {
  id: number
  title: string
  shortDescription: string
  modalDescription: string
}
const fakeData: CardT[] = [
  {
    id: 1,
    title: 'Title 1',
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim elit, iaculis non dui quis, aliquet euismod ex. Proin sollicitudin. 1`,
    modalDescription:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis lacinia nisl nunc quis nisl. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis lacinia nisl nunc quis nisl. 1',
  },
  {
    id: 2,
    title: 'Title 2',
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim elit, iaculis non dui quis, aliquet euismod ex. Proin sollicitudin. 2`,
    modalDescription:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis lacinia nisl nunc quis nisl. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis lacinia nisl nunc quis nisl. 2',
  },
  {
    id: 3,
    title: 'Title 3',
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim elit, iaculis non dui quis, aliquet euismod ex. Proin sollicitudin. 3`,
    modalDescription:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis lacinia nisl nunc quis nisl. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis lacinia nisl nunc quis nisl. 3',
  },
  {
    id: 4,
    title: 'Title 4',
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim elit, iaculis non dui quis, aliquet euismod ex. Proin sollicitudin. 4`,
    modalDescription:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis lacinia nisl nunc quis nisl. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis lacinia nisl nunc quis nisl. 4',
  },
  {
    id: 5,
    title: 'Title 5',
    shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim elit, iaculis non dui quis, aliquet euismod ex. Proin sollicitudin. 5`,
    modalDescription:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis lacinia nisl nunc quis nisl. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis lacinia nisl nunc quis nisl. 5',
  },
]

export default fakeData

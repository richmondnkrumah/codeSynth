'use client'

type Props = {}

const lop = (props: Props) => {
  const testObject = {
    name: "gre",
    class: [
      'aba','ama','essi'
    ],
    test: 'test'
  }

  localStorage.setItem("Editor",JSON.stringify(testObject))
  



  return (
    <div>lop Signed In</div>
  )
}

export default lop
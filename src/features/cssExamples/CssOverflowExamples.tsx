export default function CssOverFlowExamples() {
  return (
    <div>
      {/* <div
        style={{
          width: '200px',
          height: '100px',
          border: '2px solid green',
          backgroundColor: '#ccc',
          overflow: 'visible',
        }}
      >
        <strong>Default</strong>
        <span>This is the default state and will overflow its container</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga hic
          praesentium obcaecati ex ad distinctio in, soluta, quia sit
          accusantium repellendus atque maiores repudiandae, voluptates saepe
          pariatur quos iusto laboriosam.
        </span>
      </div> */}

      {/* <div
        style={{
          width: '200px',
          height: '100px',
          border: '2px solid green',
          backgroundColor: '#ccc',
          overflow: 'hidden',
        }}
      >
        <strong>Hidden</strong>
        <span>This hides the overflow</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          aperiam veritatis vero animi totam consequatur nisi doloremque,
          deleniti, maiores molestias hic officia magni, sed saepe? Minima ipsum
          recusandae incidunt cum.
        </span>
      </div> */}

      {/* <div
        style={{
          width: '200px',
          height: '100px',
          border: '2px solid green',
          backgroundColor: '#ccc',
          overflow: 'auto',
        }}
      >
        <strong>Auto</strong>
        <span>
          This adds a scroll bar when it's needed, but otherwise won't show
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          aperiam veritatis vero animi totam consequatur nisi doloremque,
          deleniti, maiores molestias hic officia magni, sed saepe? Minima ipsum
          recusandae incidunt cum.
        </span>
      </div> */}

      <div
        style={{
          width: '200px',
          height: '100px',
          border: '2px solid green',
          backgroundColor: '#ccc',
          overflow: 'scroll',
        }}
      >
        <strong>Scroll</strong>
        <span>This adds a scroll bar always for both x and y</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          aperiam veritatis vero animi totam consequatur nisi doloremque,
          deleniti, maiores molestias hic officia magni, sed saepe? Minima ipsum
          recusandae incidunt cum.
        </span>
      </div>

      {/* <Pagination
                    index={example}
                    total={positionExamples.length}
                    onNext={next}
                    onPrevious={previous}
                  /> */}
    </div>
  )
}

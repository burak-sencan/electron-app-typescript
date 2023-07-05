import { motion } from 'framer-motion'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})
const MyDocument = () => (
  <PDFViewer className="h-screen w-screen border">
    <Document>
      <Page size="A4" style={styles.page}>
        <Text
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}\n Vector Scientific Testing Devices`}
          fixed
          style={{
            position: 'absolute',
            right: 10,
            width: '100%',
            fontSize:'10px',
            textAlign: 'center',
            bottom: 10
          }}
        />

        <View style={styles.section}>
          <Text>Data</Text>
          {data.loadcell.map((val, idx) => (
            <Text key={idx}> {val}</Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text>Elengation</Text>
          {data.elengation.map((val, idx) => (
            <Text key={idx}> {val}</Text>
          ))}
        </View>
      </Page>
    </Document>
  </PDFViewer>
)

const data = {
  loadcell: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ],
  elengation: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ]
}
const PdfExport = ({ setshowPdfExport }) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,

      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="center absolute left-1/2 top-1/2 z-10 h-screen w-screen -translate-x-1/2 -translate-y-1/2 !transform overflow-hidden bg-black/40"
    >
      <motion.div
        variants={item}
        className="center relative h-full w-full flex-col gap-4 rounded-md bg-white p-8 text-lg text-black"
      >
        <button
          className="absolute right-1 top-1 z-10 rounded-md border-black text-2xl text-red-400 "
          onClick={() => {
            setshowPdfExport(false)
          }}
        >
          <AiOutlineCloseCircle />
        </button>
        <MyDocument />
      </motion.div>
    </motion.div>
  )
}
export default PdfExport

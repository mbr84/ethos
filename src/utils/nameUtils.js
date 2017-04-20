export const truncateFilename = (filename) => {
  const addElipsis = filename.length >= 24
  let truncatedFilename = "";
  for (let i = 0; i < filename.length && i < 24; i++) {
    truncatedFilename += filename[i]
  }
  return addElipsis ? truncatedFilename + "..." : truncatedFilename
}

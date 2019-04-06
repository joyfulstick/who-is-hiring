export default function(timestamp) {
  return new Date(timestamp * 1000).toString().substr(0, 21)
}

import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// crons.interval(
//   "delete any old files marked for deletion",
//   { minutes: 10 },
//   internal.files.deleteAllFiles
// );

crons.interval(
  "delete any old files marked for deletion",
  { hours: 24 }, // Ensure it's running every 24 hours
  internal.files.deleteAllFiles
);


export default crons;

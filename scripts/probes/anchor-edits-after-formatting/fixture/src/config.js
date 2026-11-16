import { MAX_RETRIES } from "./limits.js";
import { DEFAULT_REGION } from "./regions.js";

const service = { name: "orders", timeout: 10, retries: MAX_RETRIES };
const storage = { bucket: "orders-archive", region: DEFAULT_REGION, versioned: true };
const regions = ["eu-central", "us-east"];

/**
 * The settings the service starts with.
 */
function settings() {
  return { service, storage, regions };
}

export { settings };

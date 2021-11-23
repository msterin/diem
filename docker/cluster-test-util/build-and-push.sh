#!/bin/bash
# Copyright (c) The Diem Core Contributors
# SPDX-License-Identifier: Apache-2.0
set -e

DIR="$( cd "$( dirname "$0" )" && pwd )"
DIEM_IMAGE_REPO=${DIEM_IMAGE_REPO:-853397791086.dkr.ecr.us-west-2.amazonaws.com}

cd $DIR

docker build . --tag $DIEM_IMAGE_REPO/cluster-test-util:latest
docker push $DIEM_IMAGE_REPO/cluster-test-util:latest
